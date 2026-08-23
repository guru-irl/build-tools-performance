import React from 'react';
const LABEL_22851 = 'component_22851';
export function Component22851({ value = 22851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22851, 'data-value': derived.doubled }, children);
}
export default Component22851;
