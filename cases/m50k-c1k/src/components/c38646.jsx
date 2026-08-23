import React from 'react';
const LABEL_38646 = 'component_38646';
export function Component38646({ value = 38646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38646, 'data-value': derived.doubled }, children);
}
export default Component38646;
