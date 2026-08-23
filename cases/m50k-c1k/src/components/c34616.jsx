import React from 'react';
const LABEL_34616 = 'component_34616';
export function Component34616({ value = 34616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34616, 'data-value': derived.doubled }, children);
}
export default Component34616;
