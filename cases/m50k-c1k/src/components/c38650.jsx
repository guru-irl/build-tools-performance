import React from 'react';
const LABEL_38650 = 'component_38650';
export function Component38650({ value = 38650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38650, 'data-value': derived.doubled }, children);
}
export default Component38650;
