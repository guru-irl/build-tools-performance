import React from 'react';
const LABEL_14127 = 'component_14127';
export function Component14127({ value = 14127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14127, 'data-value': derived.doubled }, children);
}
export default Component14127;
