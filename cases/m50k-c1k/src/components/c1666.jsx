import React from 'react';
const LABEL_1666 = 'component_1666';
export function Component1666({ value = 1666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1666, 'data-value': derived.doubled }, children);
}
export default Component1666;
