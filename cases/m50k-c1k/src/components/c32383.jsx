import React from 'react';
const LABEL_32383 = 'component_32383';
export function Component32383({ value = 32383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32383, 'data-value': derived.doubled }, children);
}
export default Component32383;
