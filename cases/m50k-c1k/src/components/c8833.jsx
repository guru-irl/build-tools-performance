import React from 'react';
const LABEL_8833 = 'component_8833';
export function Component8833({ value = 8833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8833, 'data-value': derived.doubled }, children);
}
export default Component8833;
