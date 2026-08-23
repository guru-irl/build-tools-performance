import React from 'react';
const LABEL_1055 = 'component_1055';
export function Component1055({ value = 1055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1055, 'data-value': derived.doubled }, children);
}
export default Component1055;
