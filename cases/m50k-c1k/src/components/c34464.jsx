import React from 'react';
const LABEL_34464 = 'component_34464';
export function Component34464({ value = 34464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34464, 'data-value': derived.doubled }, children);
}
export default Component34464;
