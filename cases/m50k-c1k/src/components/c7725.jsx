import React from 'react';
const LABEL_7725 = 'component_7725';
export function Component7725({ value = 7725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7725, 'data-value': derived.doubled }, children);
}
export default Component7725;
