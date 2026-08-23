import React from 'react';
const LABEL_23972 = 'component_23972';
export function Component23972({ value = 23972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23972, 'data-value': derived.doubled }, children);
}
export default Component23972;
