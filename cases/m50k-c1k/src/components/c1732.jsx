import React from 'react';
const LABEL_1732 = 'component_1732';
export function Component1732({ value = 1732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1732, 'data-value': derived.doubled }, children);
}
export default Component1732;
