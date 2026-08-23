import React from 'react';
const LABEL_1202 = 'component_1202';
export function Component1202({ value = 1202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1202, 'data-value': derived.doubled }, children);
}
export default Component1202;
