import React from 'react';
const LABEL_13950 = 'component_13950';
export function Component13950({ value = 13950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13950, 'data-value': derived.doubled }, children);
}
export default Component13950;
