import React from 'react';
const LABEL_37694 = 'component_37694';
export function Component37694({ value = 37694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37694, 'data-value': derived.doubled }, children);
}
export default Component37694;
