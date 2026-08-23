import React from 'react';
const LABEL_10291 = 'component_10291';
export function Component10291({ value = 10291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10291, 'data-value': derived.doubled }, children);
}
export default Component10291;
