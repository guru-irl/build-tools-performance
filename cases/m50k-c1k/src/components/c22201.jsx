import React from 'react';
const LABEL_22201 = 'component_22201';
export function Component22201({ value = 22201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22201, 'data-value': derived.doubled }, children);
}
export default Component22201;
