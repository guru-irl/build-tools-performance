import React from 'react';
const LABEL_38196 = 'component_38196';
export function Component38196({ value = 38196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38196, 'data-value': derived.doubled }, children);
}
export default Component38196;
