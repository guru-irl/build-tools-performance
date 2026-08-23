import React from 'react';
const LABEL_1179 = 'component_1179';
export function Component1179({ value = 1179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1179, 'data-value': derived.doubled }, children);
}
export default Component1179;
