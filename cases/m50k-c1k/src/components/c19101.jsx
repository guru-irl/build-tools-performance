import React from 'react';
const LABEL_19101 = 'component_19101';
export function Component19101({ value = 19101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19101, 'data-value': derived.doubled }, children);
}
export default Component19101;
