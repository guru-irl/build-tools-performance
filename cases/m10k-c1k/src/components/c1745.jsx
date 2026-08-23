import React from 'react';
const LABEL_1745 = 'component_1745';
export function Component1745({ value = 1745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1745, 'data-value': derived.doubled }, children);
}
export default Component1745;
