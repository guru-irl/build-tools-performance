import React from 'react';
const LABEL_7089 = 'component_7089';
export function Component7089({ value = 7089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7089, 'data-value': derived.doubled }, children);
}
export default Component7089;
