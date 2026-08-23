import React from 'react';
const LABEL_10934 = 'component_10934';
export function Component10934({ value = 10934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10934, 'data-value': derived.doubled }, children);
}
export default Component10934;
