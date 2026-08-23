import React from 'react';
const LABEL_6137 = 'component_6137';
export function Component6137({ value = 6137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6137, 'data-value': derived.doubled }, children);
}
export default Component6137;
