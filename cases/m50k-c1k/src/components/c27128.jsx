import React from 'react';
const LABEL_27128 = 'component_27128';
export function Component27128({ value = 27128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27128, 'data-value': derived.doubled }, children);
}
export default Component27128;
