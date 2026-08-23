import React from 'react';
const LABEL_38972 = 'component_38972';
export function Component38972({ value = 38972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38972, 'data-value': derived.doubled }, children);
}
export default Component38972;
