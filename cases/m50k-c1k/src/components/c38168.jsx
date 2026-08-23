import React from 'react';
const LABEL_38168 = 'component_38168';
export function Component38168({ value = 38168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38168, 'data-value': derived.doubled }, children);
}
export default Component38168;
