import React from 'react';
const LABEL_27978 = 'component_27978';
export function Component27978({ value = 27978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27978, 'data-value': derived.doubled }, children);
}
export default Component27978;
