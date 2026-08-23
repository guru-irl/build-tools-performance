import React from 'react';
const LABEL_1201 = 'component_1201';
export function Component1201({ value = 1201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1201, 'data-value': derived.doubled }, children);
}
export default Component1201;
