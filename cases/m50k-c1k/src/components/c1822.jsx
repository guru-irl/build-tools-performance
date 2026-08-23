import React from 'react';
const LABEL_1822 = 'component_1822';
export function Component1822({ value = 1822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1822, 'data-value': derived.doubled }, children);
}
export default Component1822;
