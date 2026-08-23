import React from 'react';
const LABEL_46798 = 'component_46798';
export function Component46798({ value = 46798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46798, 'data-value': derived.doubled }, children);
}
export default Component46798;
