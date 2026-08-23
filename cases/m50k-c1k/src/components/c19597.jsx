import React from 'react';
const LABEL_19597 = 'component_19597';
export function Component19597({ value = 19597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19597, 'data-value': derived.doubled }, children);
}
export default Component19597;
