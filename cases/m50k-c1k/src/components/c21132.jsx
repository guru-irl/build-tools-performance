import React from 'react';
const LABEL_21132 = 'component_21132';
export function Component21132({ value = 21132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21132, 'data-value': derived.doubled }, children);
}
export default Component21132;
