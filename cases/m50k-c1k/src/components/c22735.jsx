import React from 'react';
const LABEL_22735 = 'component_22735';
export function Component22735({ value = 22735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22735, 'data-value': derived.doubled }, children);
}
export default Component22735;
