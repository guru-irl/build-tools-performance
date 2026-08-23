import React from 'react';
const LABEL_19529 = 'component_19529';
export function Component19529({ value = 19529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19529, 'data-value': derived.doubled }, children);
}
export default Component19529;
