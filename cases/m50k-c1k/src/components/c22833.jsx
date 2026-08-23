import React from 'react';
const LABEL_22833 = 'component_22833';
export function Component22833({ value = 22833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22833, 'data-value': derived.doubled }, children);
}
export default Component22833;
