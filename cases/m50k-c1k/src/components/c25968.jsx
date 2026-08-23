import React from 'react';
const LABEL_25968 = 'component_25968';
export function Component25968({ value = 25968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25968, 'data-value': derived.doubled }, children);
}
export default Component25968;
