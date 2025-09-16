import { useEffect, useRef, useState, FormEvent } from 'react';
import { Button } from '../Button';
import CloseIcon from '@/assets/close.svg?react';
import styles from './ApplyModal.module.css';
import { Text } from '../Text';

export interface ApplyModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const ApplyModal = ({ open, onClose, onSuccess }: ApplyModalProps) => {
  const ref = useRef<HTMLDialogElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const dlg = ref.current;
    if (!dlg) return;
    if (open && !dlg.open) dlg.showModal();
    if (!open && dlg.open) dlg.close();
  }, [open]);

  const handleCancel = (e: React.SyntheticEvent<HTMLDialogElement, Event>) => {
    e.preventDefault();
    onClose();
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    await new Promise((r) => setTimeout(r, 900));

    setSubmitting(false);
    setDone(true);

    setTimeout(() => {
      onClose();
      onSuccess();
      setDone(false);
    }, 1000);

    setTimeout(() => {
      setDone(false);
    }, 1000);
  };

  return (
    <dialog
      ref={ref}
      className={styles.dialog}
      onCancel={handleCancel}
      aria-labelledby="apply-title"
    >
      <button className={styles.close} aria-label="Close apply dialog" onClick={onClose}>
        <CloseIcon />
      </button>

      {!done ? (
        <form className={styles.form} onSubmit={onSubmit}>
          <Text align="left" as="h3" size="lg" className={styles.title}>
            Quick apply
          </Text>

          <label className={styles.field}>
            <span>Full name</span>
            <input name="name" type="text" required autoFocus />
          </label>

          <label className={styles.field}>
            <span>Business email</span>
            <input name="email" type="email" required />
          </label>

          <label className={styles.field}>
            <span>Company</span>
            <input name="company" type="text" required />
          </label>

          <Button type="submit" disabled={submitting}>
            {submitting ? 'Submitting…' : 'Submit'}
          </Button>
        </form>
      ) : (
        <div className={styles.done} role="status" aria-live="polite">
          <Text as="h3" size="lg" className={styles.title}>
            Thanks!
          </Text>
          <Text as="p" size="sm">
            We’ll get back to you shortly.
          </Text>
        </div>
      )}
    </dialog>
  );
};
