import React from 'react';
const LABEL_38997 = 'component_38997';
export function Component38997({ value = 38997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38997, 'data-value': derived.doubled }, children);
}
export default Component38997;
