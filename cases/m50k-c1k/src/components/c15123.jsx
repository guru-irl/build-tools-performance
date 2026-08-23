import React from 'react';
const LABEL_15123 = 'component_15123';
export function Component15123({ value = 15123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15123, 'data-value': derived.doubled }, children);
}
export default Component15123;
