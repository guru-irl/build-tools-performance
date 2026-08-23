import React from 'react';
const LABEL_44934 = 'component_44934';
export function Component44934({ value = 44934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44934, 'data-value': derived.doubled }, children);
}
export default Component44934;
