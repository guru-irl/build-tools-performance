import React from 'react';
const LABEL_38900 = 'component_38900';
export function Component38900({ value = 38900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38900, 'data-value': derived.doubled }, children);
}
export default Component38900;
