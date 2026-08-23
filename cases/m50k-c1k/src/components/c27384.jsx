import React from 'react';
const LABEL_27384 = 'component_27384';
export function Component27384({ value = 27384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27384, 'data-value': derived.doubled }, children);
}
export default Component27384;
