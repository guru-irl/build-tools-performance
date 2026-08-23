import React from 'react';
const LABEL_12851 = 'component_12851';
export function Component12851({ value = 12851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12851, 'data-value': derived.doubled }, children);
}
export default Component12851;
