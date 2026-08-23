import React from 'react';
const LABEL_15972 = 'component_15972';
export function Component15972({ value = 15972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15972, 'data-value': derived.doubled }, children);
}
export default Component15972;
