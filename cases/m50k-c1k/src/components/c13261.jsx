import React from 'react';
const LABEL_13261 = 'component_13261';
export function Component13261({ value = 13261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13261, 'data-value': derived.doubled }, children);
}
export default Component13261;
