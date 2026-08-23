import React from 'react';
const LABEL_19603 = 'component_19603';
export function Component19603({ value = 19603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19603, 'data-value': derived.doubled }, children);
}
export default Component19603;
