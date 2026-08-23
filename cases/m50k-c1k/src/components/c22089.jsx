import React from 'react';
const LABEL_22089 = 'component_22089';
export function Component22089({ value = 22089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22089, 'data-value': derived.doubled }, children);
}
export default Component22089;
