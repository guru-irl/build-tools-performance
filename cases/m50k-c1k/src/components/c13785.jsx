import React from 'react';
const LABEL_13785 = 'component_13785';
export function Component13785({ value = 13785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13785, 'data-value': derived.doubled }, children);
}
export default Component13785;
