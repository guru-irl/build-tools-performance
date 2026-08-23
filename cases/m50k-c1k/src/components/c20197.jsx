import React from 'react';
const LABEL_20197 = 'component_20197';
export function Component20197({ value = 20197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20197, 'data-value': derived.doubled }, children);
}
export default Component20197;
