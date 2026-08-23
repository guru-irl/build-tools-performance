import React from 'react';
const LABEL_16106 = 'component_16106';
export function Component16106({ value = 16106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16106, 'data-value': derived.doubled }, children);
}
export default Component16106;
