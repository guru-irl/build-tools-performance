import React from 'react';
const LABEL_11729 = 'component_11729';
export function Component11729({ value = 11729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11729, 'data-value': derived.doubled }, children);
}
export default Component11729;
