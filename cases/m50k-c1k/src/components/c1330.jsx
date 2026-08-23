import React from 'react';
const LABEL_1330 = 'component_1330';
export function Component1330({ value = 1330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1330, 'data-value': derived.doubled }, children);
}
export default Component1330;
