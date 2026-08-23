import React from 'react';
const LABEL_5865 = 'component_5865';
export function Component5865({ value = 5865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5865, 'data-value': derived.doubled }, children);
}
export default Component5865;
