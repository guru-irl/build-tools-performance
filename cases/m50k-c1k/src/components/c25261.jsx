import React from 'react';
const LABEL_25261 = 'component_25261';
export function Component25261({ value = 25261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25261, 'data-value': derived.doubled }, children);
}
export default Component25261;
