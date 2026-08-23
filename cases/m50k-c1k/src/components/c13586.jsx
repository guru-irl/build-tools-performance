import React from 'react';
const LABEL_13586 = 'component_13586';
export function Component13586({ value = 13586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13586, 'data-value': derived.doubled }, children);
}
export default Component13586;
