import React from 'react';
const LABEL_25330 = 'component_25330';
export function Component25330({ value = 25330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25330, 'data-value': derived.doubled }, children);
}
export default Component25330;
