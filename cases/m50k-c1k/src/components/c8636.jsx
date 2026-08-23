import React from 'react';
const LABEL_8636 = 'component_8636';
export function Component8636({ value = 8636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8636, 'data-value': derived.doubled }, children);
}
export default Component8636;
