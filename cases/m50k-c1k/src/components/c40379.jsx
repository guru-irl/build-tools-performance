import React from 'react';
const LABEL_40379 = 'component_40379';
export function Component40379({ value = 40379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40379, 'data-value': derived.doubled }, children);
}
export default Component40379;
