import React from 'react';
const LABEL_37654 = 'component_37654';
export function Component37654({ value = 37654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37654, 'data-value': derived.doubled }, children);
}
export default Component37654;
