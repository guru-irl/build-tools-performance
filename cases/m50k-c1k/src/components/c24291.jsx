import React from 'react';
const LABEL_24291 = 'component_24291';
export function Component24291({ value = 24291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24291, 'data-value': derived.doubled }, children);
}
export default Component24291;
