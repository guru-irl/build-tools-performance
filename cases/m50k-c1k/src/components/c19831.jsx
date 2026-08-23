import React from 'react';
const LABEL_19831 = 'component_19831';
export function Component19831({ value = 19831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19831, 'data-value': derived.doubled }, children);
}
export default Component19831;
