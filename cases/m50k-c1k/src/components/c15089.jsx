import React from 'react';
const LABEL_15089 = 'component_15089';
export function Component15089({ value = 15089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15089, 'data-value': derived.doubled }, children);
}
export default Component15089;
