import React from 'react';
const LABEL_24819 = 'component_24819';
export function Component24819({ value = 24819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24819, 'data-value': derived.doubled }, children);
}
export default Component24819;
