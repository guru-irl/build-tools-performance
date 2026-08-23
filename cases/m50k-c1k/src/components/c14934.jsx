import React from 'react';
const LABEL_14934 = 'component_14934';
export function Component14934({ value = 14934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14934, 'data-value': derived.doubled }, children);
}
export default Component14934;
