import React from 'react';
const LABEL_24750 = 'component_24750';
export function Component24750({ value = 24750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24750, 'data-value': derived.doubled }, children);
}
export default Component24750;
