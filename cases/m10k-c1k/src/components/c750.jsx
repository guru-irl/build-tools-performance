import React from 'react';
const LABEL_750 = 'component_750';
export function Component750({ value = 750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_750, 'data-value': derived.doubled }, children);
}
export default Component750;
