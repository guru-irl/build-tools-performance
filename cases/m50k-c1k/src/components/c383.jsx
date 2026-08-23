import React from 'react';
const LABEL_383 = 'component_383';
export function Component383({ value = 383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_383, 'data-value': derived.doubled }, children);
}
export default Component383;
