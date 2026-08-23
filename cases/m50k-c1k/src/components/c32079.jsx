import React from 'react';
const LABEL_32079 = 'component_32079';
export function Component32079({ value = 32079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32079, 'data-value': derived.doubled }, children);
}
export default Component32079;
