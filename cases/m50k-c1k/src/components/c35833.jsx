import React from 'react';
const LABEL_35833 = 'component_35833';
export function Component35833({ value = 35833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35833, 'data-value': derived.doubled }, children);
}
export default Component35833;
