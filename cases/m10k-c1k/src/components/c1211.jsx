import React from 'react';
const LABEL_1211 = 'component_1211';
export function Component1211({ value = 1211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1211, 'data-value': derived.doubled }, children);
}
export default Component1211;
