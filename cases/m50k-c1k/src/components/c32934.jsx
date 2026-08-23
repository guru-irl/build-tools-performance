import React from 'react';
const LABEL_32934 = 'component_32934';
export function Component32934({ value = 32934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32934, 'data-value': derived.doubled }, children);
}
export default Component32934;
