import React from 'react';
const LABEL_33812 = 'component_33812';
export function Component33812({ value = 33812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33812, 'data-value': derived.doubled }, children);
}
export default Component33812;
