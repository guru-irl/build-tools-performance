import React from 'react';
const LABEL_11483 = 'component_11483';
export function Component11483({ value = 11483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11483, 'data-value': derived.doubled }, children);
}
export default Component11483;
