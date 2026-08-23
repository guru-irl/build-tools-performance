import React from 'react';
const LABEL_19798 = 'component_19798';
export function Component19798({ value = 19798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19798, 'data-value': derived.doubled }, children);
}
export default Component19798;
