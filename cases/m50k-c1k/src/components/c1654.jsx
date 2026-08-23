import React from 'react';
const LABEL_1654 = 'component_1654';
export function Component1654({ value = 1654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1654, 'data-value': derived.doubled }, children);
}
export default Component1654;
