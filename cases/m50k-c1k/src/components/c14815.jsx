import React from 'react';
const LABEL_14815 = 'component_14815';
export function Component14815({ value = 14815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14815, 'data-value': derived.doubled }, children);
}
export default Component14815;
