import React from 'react';
const LABEL_13611 = 'component_13611';
export function Component13611({ value = 13611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13611, 'data-value': derived.doubled }, children);
}
export default Component13611;
