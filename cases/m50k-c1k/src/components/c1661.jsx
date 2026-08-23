import React from 'react';
const LABEL_1661 = 'component_1661';
export function Component1661({ value = 1661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1661, 'data-value': derived.doubled }, children);
}
export default Component1661;
