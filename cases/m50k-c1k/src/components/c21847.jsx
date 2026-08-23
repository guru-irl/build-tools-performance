import React from 'react';
const LABEL_21847 = 'component_21847';
export function Component21847({ value = 21847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21847, 'data-value': derived.doubled }, children);
}
export default Component21847;
