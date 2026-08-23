import React from 'react';
const LABEL_3934 = 'component_3934';
export function Component3934({ value = 3934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3934, 'data-value': derived.doubled }, children);
}
export default Component3934;
