import React from 'react';
const LABEL_127 = 'component_127';
export function Component127({ value = 127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_127, 'data-value': derived.doubled }, children);
}
export default Component127;
