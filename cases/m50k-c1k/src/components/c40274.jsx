import React from 'react';
const LABEL_40274 = 'component_40274';
export function Component40274({ value = 40274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40274, 'data-value': derived.doubled }, children);
}
export default Component40274;
