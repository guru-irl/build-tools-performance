import React from 'react';
const LABEL_26915 = 'component_26915';
export function Component26915({ value = 26915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26915, 'data-value': derived.doubled }, children);
}
export default Component26915;
