import React from 'react';
const LABEL_438 = 'component_438';
export function Component438({ value = 438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_438, 'data-value': derived.doubled }, children);
}
export default Component438;
