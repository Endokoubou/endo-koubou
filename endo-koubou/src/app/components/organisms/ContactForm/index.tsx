"use client";
import { useState } from "react";
import { Toaster } from "../../molecules/Toaster";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import styles from "./contact_form.module.scss";
import { Typography } from "../../atoms";
import { ContactButton } from "../../molecules";

export function ContactForm() {
  const { register, handleSubmit } = useForm();
  const [isDisable, setIsDisable] = useState<boolean>(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsDisable(true);
      await fetch("https://hyperform.jp/api/async/4WVzDf22/complete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setIsDisable(false);
      toast.custom(
        <Toaster message="お問い合わせが完了しました。メールをご確認ください。" />
      );
    } catch (e) {
      setIsDisable(false);
      toast.custom(
        <Toaster
          type="error"
          message="送信に失敗しました。しばらく待ってから再度お試しください。"
        />
      );
    }
  });

  return (
    <form method="post" onSubmit={onSubmit} className={styles.form}>
      <div>
        <label>
          <Typography variant="h4">お名前</Typography>
          <input
            id="name"
            type="text"
            placeholder="例）山田太郎"
            {...register("name")}
            disabled={isDisable}
            required
            className={styles.input_text}
          />
        </label>
      </div>
      <div>
        <label>
          <Typography variant="h4">メールアドレス</Typography>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="例）example@example.com"
            disabled={isDisable}
            required
            className={styles.input_text}
          />
        </label>
      </div>
      <div>
        <label>
          <Typography variant="h4">所属団体</Typography>
          <input
            type="text"
            {...register("group")}
            placeholder="例）〇〇劇団"
            disabled={true}
            className={styles.input_text}
          />
        </label>
      </div>
      <div>
        <label>
          <Typography variant="h4">お問い合わせ種別</Typography>
          <select
            id="inquiryType"
            {...register("inquiryType")}
            disabled={isDisable}
          >
            <option value="制作の依頼、お見積もり">
              制作の依頼、お見積もり
            </option>
            <option value="依頼前の相談、お見積もりなど">
              依頼前の相談、お見積もりなど
            </option>
            <option value="その他">その他</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          <Typography variant="h4">お問い合わせ内容をご記載ください</Typography>
          <textarea
            id="message"
            {...register("message")}
            disabled={isDisable}
            required
          ></textarea>
        </label>
      </div>
      <div className={styles.submit_button}>
        <ContactButton label="送信する" />
      </div>
    </form>
  );
}
