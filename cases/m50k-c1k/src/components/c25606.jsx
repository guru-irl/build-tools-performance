import React from 'react';
const LABEL_25606 = 'component_25606';
export function Component25606({ value = 25606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25606, 'data-value': derived.doubled }, children);
}
export default Component25606;
