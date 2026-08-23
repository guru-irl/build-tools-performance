import React from 'react';
const LABEL_20815 = 'component_20815';
export function Component20815({ value = 20815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20815, 'data-value': derived.doubled }, children);
}
export default Component20815;
