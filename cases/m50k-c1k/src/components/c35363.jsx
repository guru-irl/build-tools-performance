import React from 'react';
const LABEL_35363 = 'component_35363';
export function Component35363({ value = 35363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35363, 'data-value': derived.doubled }, children);
}
export default Component35363;
