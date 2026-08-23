import React from 'react';
const LABEL_3089 = 'component_3089';
export function Component3089({ value = 3089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3089, 'data-value': derived.doubled }, children);
}
export default Component3089;
