import React from 'react';
const LABEL_764 = 'component_764';
export function Component764({ value = 764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_764, 'data-value': derived.doubled }, children);
}
export default Component764;
