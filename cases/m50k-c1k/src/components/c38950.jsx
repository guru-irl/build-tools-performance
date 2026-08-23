import React from 'react';
const LABEL_38950 = 'component_38950';
export function Component38950({ value = 38950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38950, 'data-value': derived.doubled }, children);
}
export default Component38950;
