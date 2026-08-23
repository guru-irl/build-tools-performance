import React from 'react';
const LABEL_39235 = 'component_39235';
export function Component39235({ value = 39235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39235, 'data-value': derived.doubled }, children);
}
export default Component39235;
