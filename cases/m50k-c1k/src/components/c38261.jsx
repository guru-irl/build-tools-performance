import React from 'react';
const LABEL_38261 = 'component_38261';
export function Component38261({ value = 38261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38261, 'data-value': derived.doubled }, children);
}
export default Component38261;
