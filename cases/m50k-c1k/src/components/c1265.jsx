import React from 'react';
const LABEL_1265 = 'component_1265';
export function Component1265({ value = 1265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1265, 'data-value': derived.doubled }, children);
}
export default Component1265;
