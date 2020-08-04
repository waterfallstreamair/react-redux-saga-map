import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import { getPoints } from "../../../actions/points.actions";

const Input = styled.input`
  width: 100%;
  border: solid 1px #999999;
  padding: 2px;
  box-sizing: border-box;
  margin-bottom: 2px;
`;

const Form = ({ addresses, getPoints, distance }) => {
  const { register, handleSubmit, watch, errors, setValue } = useForm();

  useEffect(() => {
    setValue("point1", addresses.point1);
    setValue("point2", addresses.point2);
  }, [addresses.point1, addresses.point2, setValue]);

  const onSubmit = (data) => {
    const { point1, point2 } = data;
    getPoints({
      addressPoints: {
        point1,
        point2,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="point1"
        placeholder="Address 1"
        ref={register({ required: true })}
        defaultValue={addresses.point1}
      />
      {errors.point1 && <div>This field is required</div>}
      <Input
        name="point2"
        placeholder="Address 2"
        ref={register({ required: true })}
        defaultValue={addresses.point2}
      />
      {errors.point2 && <div>This field is required</div>}
      {distance && <div>Distance {distance} meters</div>}
      <Input type="submit" value="Distance" />
    </form>
  );
};

const mapStateToProps = (state) => ({
  addresses: state.pointsReducer.addresses,
  distance: state.pointsReducer.distance,
});

const mapDispatchToProps = (dispatch) => ({
  getPoints: (options) => {
    return dispatch(getPoints(options));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
