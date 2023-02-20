import React, { FC } from "react";
import s from "./PriceButtonBox.module.scss";
import { BigButton } from "../../shared/Buttons";
import { currencySymbol } from "../../../constants/currencySymbol";
import { PriceType } from "../../../types/data.types";

interface PriceButtonBoxProps {
  price: PriceType;
  btnTitle: string;
  onClick: () => void;
  loading: boolean;
}

const PriceButtonBox: FC<PriceButtonBoxProps> = ({
  price,
  btnTitle,
  onClick,
  loading,
}) => {
  return (
    <div className={s.priceAndButton}>
      <p className={s.priceFont}>
        {`${currencySymbol[price.currency]} ${price.amount}`}
        <span> p.p.</span>
      </p>
      <BigButton title={btnTitle} onClick={onClick} loading={loading} />
    </div>
  );
};

export default PriceButtonBox;
