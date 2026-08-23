import React from 'react';
const LABEL_13243 = 'component_13243';
export function Component13243({ value = 13243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13243, 'data-value': derived.doubled }, children);
}
export default Component13243;
