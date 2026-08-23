import React from 'react';
const LABEL_28528 = 'component_28528';
export function Component28528({ value = 28528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28528, 'data-value': derived.doubled }, children);
}
export default Component28528;
