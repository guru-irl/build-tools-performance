import React from 'react';
const LABEL_46079 = 'component_46079';
export function Component46079({ value = 46079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46079, 'data-value': derived.doubled }, children);
}
export default Component46079;
