import React from 'react';
const LABEL_21842 = 'component_21842';
export function Component21842({ value = 21842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21842, 'data-value': derived.doubled }, children);
}
export default Component21842;
