import React from 'react';
const LABEL_27239 = 'component_27239';
export function Component27239({ value = 27239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27239, 'data-value': derived.doubled }, children);
}
export default Component27239;
