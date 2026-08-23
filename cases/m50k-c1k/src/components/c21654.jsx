import React from 'react';
const LABEL_21654 = 'component_21654';
export function Component21654({ value = 21654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21654, 'data-value': derived.doubled }, children);
}
export default Component21654;
