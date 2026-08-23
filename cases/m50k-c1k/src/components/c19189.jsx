import React from 'react';
const LABEL_19189 = 'component_19189';
export function Component19189({ value = 19189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19189, 'data-value': derived.doubled }, children);
}
export default Component19189;
