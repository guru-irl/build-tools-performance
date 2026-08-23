import React from 'react';
const LABEL_26934 = 'component_26934';
export function Component26934({ value = 26934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26934, 'data-value': derived.doubled }, children);
}
export default Component26934;
