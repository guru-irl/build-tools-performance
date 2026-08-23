import React from 'react';
const LABEL_1743 = 'component_1743';
export function Component1743({ value = 1743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1743, 'data-value': derived.doubled }, children);
}
export default Component1743;
