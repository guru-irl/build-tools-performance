import React from 'react';
const LABEL_45256 = 'component_45256';
export function Component45256({ value = 45256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45256, 'data-value': derived.doubled }, children);
}
export default Component45256;
