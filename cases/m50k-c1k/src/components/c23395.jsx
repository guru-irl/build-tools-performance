import React from 'react';
const LABEL_23395 = 'component_23395';
export function Component23395({ value = 23395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23395, 'data-value': derived.doubled }, children);
}
export default Component23395;
