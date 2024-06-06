"use client";
import React, { useEffect, useState, useRef } from "react";
import * as LR from "@uploadcare/blocks";
import { useRouter } from "next/navigation";
import "@uploadcare/blocks/web/lr-file-uploader-regular.min.css";

type Props = {
  onUpload: (e: string) => any;
};

LR.registerBlocks(LR);

const UploadCareButton = ({ onUpload }: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const ctxProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  >(null);

  useEffect(() => {
    setIsMounted(true);
  });

  useEffect(() => {
    const handleUpload = async (e: any) => {
      const file = await onUpload(e.detail.cdnUrl);
      if (file) {
        router.refresh();
      }
    };

    const currentRef = ctxProviderRef.current;
    if (currentRef) {
      console.log("Adding event listener");
      currentRef.addEventListener("file-upload-success", handleUpload);
    }

    return () => {
      if (currentRef) {
        console.log("Removing event listener");
        currentRef.removeEventListener("file-upload-success", handleUpload);
      }
    };
  }, [onUpload, router]);

  if (!isMounted) return null;

  return (
    <div>
      <lr-config ctx-name="my-uploader" pubkey="db544c1c4a472dea5185" />

      <lr-file-uploader-regular ctx-name="my-uploader" />

      <lr-upload-ctx-provider ctx-name="my-uploader" ref={ctxProviderRef} />
    </div>
  );
};

export default UploadCareButton;
