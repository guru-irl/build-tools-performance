import React from 'react';
const LABEL_36934 = 'component_36934';
export function Component36934({ value = 36934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36934, 'data-value': derived.doubled }, children);
}
export default Component36934;
