import React from 'react';
const LABEL_1637 = 'component_1637';
export function Component1637({ value = 1637, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1637, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1637, 'data-value': derived.doubled }, children);
}
export default Component1637;
