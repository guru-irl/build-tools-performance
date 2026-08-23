import React from 'react';
const LABEL_18343 = 'component_18343';
export function Component18343({ value = 18343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18343, 'data-value': derived.doubled }, children);
}
export default Component18343;
