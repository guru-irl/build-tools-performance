import React from 'react';
const LABEL_25972 = 'component_25972';
export function Component25972({ value = 25972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25972, 'data-value': derived.doubled }, children);
}
export default Component25972;
