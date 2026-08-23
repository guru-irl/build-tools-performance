import React from 'react';
const LABEL_12626 = 'component_12626';
export function Component12626({ value = 12626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12626, 'data-value': derived.doubled }, children);
}
export default Component12626;
