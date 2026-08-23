import React from 'react';
const LABEL_18079 = 'component_18079';
export function Component18079({ value = 18079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18079, 'data-value': derived.doubled }, children);
}
export default Component18079;
