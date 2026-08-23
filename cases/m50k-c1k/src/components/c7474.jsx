import React from 'react';
const LABEL_7474 = 'component_7474';
export function Component7474({ value = 7474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7474, 'data-value': derived.doubled }, children);
}
export default Component7474;
