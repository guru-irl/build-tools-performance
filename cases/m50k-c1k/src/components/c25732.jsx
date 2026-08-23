import React from 'react';
const LABEL_25732 = 'component_25732';
export function Component25732({ value = 25732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25732, 'data-value': derived.doubled }, children);
}
export default Component25732;
