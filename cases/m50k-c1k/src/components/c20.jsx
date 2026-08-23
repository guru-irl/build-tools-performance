import React from 'react';
const LABEL_20 = 'component_20';
export function Component20({ value = 20, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20, 'data-value': derived.doubled }, children);
}
export default Component20;
