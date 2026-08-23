import React from 'react';
const LABEL_6934 = 'component_6934';
export function Component6934({ value = 6934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6934, 'data-value': derived.doubled }, children);
}
export default Component6934;
