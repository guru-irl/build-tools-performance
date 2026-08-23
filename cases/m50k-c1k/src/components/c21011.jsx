import React from 'react';
const LABEL_21011 = 'component_21011';
export function Component21011({ value = 21011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21011, 'data-value': derived.doubled }, children);
}
export default Component21011;
