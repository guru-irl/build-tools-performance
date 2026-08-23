import React from 'react';
const LABEL_1824 = 'component_1824';
export function Component1824({ value = 1824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1824, 'data-value': derived.doubled }, children);
}
export default Component1824;
