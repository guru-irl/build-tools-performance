import React from 'react';
const LABEL_1508 = 'component_1508';
export function Component1508({ value = 1508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1508, 'data-value': derived.doubled }, children);
}
export default Component1508;
