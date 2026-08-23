import React from 'react';
const LABEL_19490 = 'component_19490';
export function Component19490({ value = 19490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19490, 'data-value': derived.doubled }, children);
}
export default Component19490;
