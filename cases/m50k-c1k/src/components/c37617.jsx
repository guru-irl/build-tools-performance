import React from 'react';
const LABEL_37617 = 'component_37617';
export function Component37617({ value = 37617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37617, 'data-value': derived.doubled }, children);
}
export default Component37617;
