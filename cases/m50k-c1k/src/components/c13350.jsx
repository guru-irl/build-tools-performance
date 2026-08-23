import React from 'react';
const LABEL_13350 = 'component_13350';
export function Component13350({ value = 13350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13350, 'data-value': derived.doubled }, children);
}
export default Component13350;
