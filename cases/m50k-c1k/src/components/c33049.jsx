import React from 'react';
const LABEL_33049 = 'component_33049';
export function Component33049({ value = 33049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33049, 'data-value': derived.doubled }, children);
}
export default Component33049;
