import React from 'react';
const LABEL_26837 = 'component_26837';
export function Component26837({ value = 26837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26837, 'data-value': derived.doubled }, children);
}
export default Component26837;
