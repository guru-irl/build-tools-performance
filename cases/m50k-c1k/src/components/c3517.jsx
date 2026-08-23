import React from 'react';
const LABEL_3517 = 'component_3517';
export function Component3517({ value = 3517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3517, 'data-value': derived.doubled }, children);
}
export default Component3517;
