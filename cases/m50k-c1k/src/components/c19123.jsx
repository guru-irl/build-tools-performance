import React from 'react';
const LABEL_19123 = 'component_19123';
export function Component19123({ value = 19123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19123, 'data-value': derived.doubled }, children);
}
export default Component19123;
