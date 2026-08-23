import React from 'react';
const LABEL_1708 = 'component_1708';
export function Component1708({ value = 1708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1708, 'data-value': derived.doubled }, children);
}
export default Component1708;
