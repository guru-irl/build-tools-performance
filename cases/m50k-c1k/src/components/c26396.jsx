import React from 'react';
const LABEL_26396 = 'component_26396';
export function Component26396({ value = 26396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26396, 'data-value': derived.doubled }, children);
}
export default Component26396;
