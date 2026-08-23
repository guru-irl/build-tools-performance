import React from 'react';
const LABEL_14729 = 'component_14729';
export function Component14729({ value = 14729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14729, 'data-value': derived.doubled }, children);
}
export default Component14729;
