import React from 'react';
const LABEL_27782 = 'component_27782';
export function Component27782({ value = 27782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27782, 'data-value': derived.doubled }, children);
}
export default Component27782;
