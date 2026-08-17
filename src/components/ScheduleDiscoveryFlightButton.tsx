"use client";

import { useState } from "react";
import { ChevronRightIcon } from "@/components/icons";
import Modal from "@/components/Modal";
import DiscoveryFlightForm from "@/components/DiscoveryFlightForm";

type ScheduleDiscoveryFlightButtonProps = {
  className?: string;
};

export default function ScheduleDiscoveryFlightButton({
  className,
}: ScheduleDiscoveryFlightButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        Schedule a Discovery Flight
        <ChevronRightIcon className="h-4 w-4" />
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Schedule a Discovery Flight"
        description="Fill out the form below and we'll be in touch to get you scheduled."
      >
        <DiscoveryFlightForm />
      </Modal>
    </>
  );
}
