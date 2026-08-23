import React from 'react';
const LABEL_21210 = 'component_21210';
export function Component21210({ value = 21210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21210, 'data-value': derived.doubled }, children);
}
export default Component21210;
