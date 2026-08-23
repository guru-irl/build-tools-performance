import React from 'react';
const LABEL_435 = 'component_435';
export function Component435({ value = 435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_435, 'data-value': derived.doubled }, children);
}
export default Component435;
