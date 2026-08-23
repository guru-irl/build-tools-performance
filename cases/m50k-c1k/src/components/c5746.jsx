import React from 'react';
const LABEL_5746 = 'component_5746';
export function Component5746({ value = 5746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5746, 'data-value': derived.doubled }, children);
}
export default Component5746;
