import React from 'react';
const LABEL_13848 = 'component_13848';
export function Component13848({ value = 13848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13848, 'data-value': derived.doubled }, children);
}
export default Component13848;
