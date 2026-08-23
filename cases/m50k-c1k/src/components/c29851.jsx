import React from 'react';
const LABEL_29851 = 'component_29851';
export function Component29851({ value = 29851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29851, 'data-value': derived.doubled }, children);
}
export default Component29851;
