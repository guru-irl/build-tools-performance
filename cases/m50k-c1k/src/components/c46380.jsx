import React from 'react';
const LABEL_46380 = 'component_46380';
export function Component46380({ value = 46380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46380, 'data-value': derived.doubled }, children);
}
export default Component46380;
