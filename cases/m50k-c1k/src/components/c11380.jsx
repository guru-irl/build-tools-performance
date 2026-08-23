import React from 'react';
const LABEL_11380 = 'component_11380';
export function Component11380({ value = 11380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11380, 'data-value': derived.doubled }, children);
}
export default Component11380;
