import React from 'react';
const LABEL_37234 = 'component_37234';
export function Component37234({ value = 37234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37234, 'data-value': derived.doubled }, children);
}
export default Component37234;
