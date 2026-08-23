import React from 'react';
const LABEL_23737 = 'component_23737';
export function Component23737({ value = 23737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23737, 'data-value': derived.doubled }, children);
}
export default Component23737;
