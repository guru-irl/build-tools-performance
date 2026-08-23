import React from 'react';
const LABEL_20646 = 'component_20646';
export function Component20646({ value = 20646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20646, 'data-value': derived.doubled }, children);
}
export default Component20646;
