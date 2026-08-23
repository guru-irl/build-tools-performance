import React from 'react';
const LABEL_13291 = 'component_13291';
export function Component13291({ value = 13291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13291, 'data-value': derived.doubled }, children);
}
export default Component13291;
