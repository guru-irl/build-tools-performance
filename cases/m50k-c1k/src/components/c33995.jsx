import React from 'react';
const LABEL_33995 = 'component_33995';
export function Component33995({ value = 33995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33995, 'data-value': derived.doubled }, children);
}
export default Component33995;
