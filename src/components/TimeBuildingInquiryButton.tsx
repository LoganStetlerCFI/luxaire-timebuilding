"use client";

import { useState } from "react";
import { ChevronRightIcon } from "@/components/icons";
import Modal from "@/components/Modal";
import TimeBuildingInquiryForm from "@/components/TimeBuildingInquiryForm";

type TimeBuildingInquiryButtonProps = {
  className?: string;
};

export default function TimeBuildingInquiryButton({
  className,
}: TimeBuildingInquiryButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        Inquire About Time Building
        <ChevronRightIcon className="h-4 w-4" />
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Inquire About Time Building"
        description="Tell us a bit about your experience and availability, and we'll be in touch."
      >
        <TimeBuildingInquiryForm />
      </Modal>
    </>
  );
}
