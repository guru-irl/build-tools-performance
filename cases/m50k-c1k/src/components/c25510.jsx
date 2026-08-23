import React from 'react';
const LABEL_25510 = 'component_25510';
export function Component25510({ value = 25510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25510, 'data-value': derived.doubled }, children);
}
export default Component25510;
