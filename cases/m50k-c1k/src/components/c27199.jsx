import React from 'react';
const LABEL_27199 = 'component_27199';
export function Component27199({ value = 27199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27199, 'data-value': derived.doubled }, children);
}
export default Component27199;
