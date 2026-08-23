import React from 'react';
const LABEL_1234 = 'component_1234';
export function Component1234({ value = 1234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1234, 'data-value': derived.doubled }, children);
}
export default Component1234;
