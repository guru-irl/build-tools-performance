import React from 'react';
const LABEL_22979 = 'component_22979';
export function Component22979({ value = 22979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22979, 'data-value': derived.doubled }, children);
}
export default Component22979;
