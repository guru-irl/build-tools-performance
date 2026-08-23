import React from 'react';
const LABEL_19629 = 'component_19629';
export function Component19629({ value = 19629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19629, 'data-value': derived.doubled }, children);
}
export default Component19629;
