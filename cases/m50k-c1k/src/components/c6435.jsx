import React from 'react';
const LABEL_6435 = 'component_6435';
export function Component6435({ value = 6435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6435, 'data-value': derived.doubled }, children);
}
export default Component6435;
