import React from 'react';
const LABEL_13833 = 'component_13833';
export function Component13833({ value = 13833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13833, 'data-value': derived.doubled }, children);
}
export default Component13833;
