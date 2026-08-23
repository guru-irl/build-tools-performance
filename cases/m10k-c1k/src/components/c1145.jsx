import React from 'react';
const LABEL_1145 = 'component_1145';
export function Component1145({ value = 1145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1145, 'data-value': derived.doubled }, children);
}
export default Component1145;
