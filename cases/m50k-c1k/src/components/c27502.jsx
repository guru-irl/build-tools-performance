import React from 'react';
const LABEL_27502 = 'component_27502';
export function Component27502({ value = 27502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27502, 'data-value': derived.doubled }, children);
}
export default Component27502;
