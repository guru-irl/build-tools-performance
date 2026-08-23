import React from 'react';
const LABEL_1083 = 'component_1083';
export function Component1083({ value = 1083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1083, 'data-value': derived.doubled }, children);
}
export default Component1083;
