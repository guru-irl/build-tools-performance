import React from 'react';
const LABEL_23089 = 'component_23089';
export function Component23089({ value = 23089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23089, 'data-value': derived.doubled }, children);
}
export default Component23089;
