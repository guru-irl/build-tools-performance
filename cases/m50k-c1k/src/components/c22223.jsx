import React from 'react';
const LABEL_22223 = 'component_22223';
export function Component22223({ value = 22223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22223, 'data-value': derived.doubled }, children);
}
export default Component22223;
