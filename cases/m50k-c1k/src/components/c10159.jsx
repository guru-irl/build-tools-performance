import React from 'react';
const LABEL_10159 = 'component_10159';
export function Component10159({ value = 10159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10159, 'data-value': derived.doubled }, children);
}
export default Component10159;
