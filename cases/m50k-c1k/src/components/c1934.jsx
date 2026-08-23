import React from 'react';
const LABEL_1934 = 'component_1934';
export function Component1934({ value = 1934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1934, 'data-value': derived.doubled }, children);
}
export default Component1934;
