import React from 'react';
const LABEL_22176 = 'component_22176';
export function Component22176({ value = 22176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22176, 'data-value': derived.doubled }, children);
}
export default Component22176;
