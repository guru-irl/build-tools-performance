import React from 'react';
const LABEL_22352 = 'component_22352';
export function Component22352({ value = 22352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22352, 'data-value': derived.doubled }, children);
}
export default Component22352;
