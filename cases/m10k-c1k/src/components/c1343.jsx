import React from 'react';
const LABEL_1343 = 'component_1343';
export function Component1343({ value = 1343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1343, 'data-value': derived.doubled }, children);
}
export default Component1343;
