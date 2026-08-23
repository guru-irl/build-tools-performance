import React from 'react';
const LABEL_1463 = 'component_1463';
export function Component1463({ value = 1463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1463, 'data-value': derived.doubled }, children);
}
export default Component1463;
