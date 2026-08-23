import React from 'react';
const LABEL_13528 = 'component_13528';
export function Component13528({ value = 13528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13528, 'data-value': derived.doubled }, children);
}
export default Component13528;
