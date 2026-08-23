import React from 'react';
const LABEL_20497 = 'component_20497';
export function Component20497({ value = 20497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20497, 'data-value': derived.doubled }, children);
}
export default Component20497;
