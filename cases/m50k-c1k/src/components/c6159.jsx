import React from 'react';
const LABEL_6159 = 'component_6159';
export function Component6159({ value = 6159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6159, 'data-value': derived.doubled }, children);
}
export default Component6159;
