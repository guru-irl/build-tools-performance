import React from 'react';
const LABEL_27880 = 'component_27880';
export function Component27880({ value = 27880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27880, 'data-value': derived.doubled }, children);
}
export default Component27880;
