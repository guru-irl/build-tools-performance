import React from 'react';
const LABEL_25334 = 'component_25334';
export function Component25334({ value = 25334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25334, 'data-value': derived.doubled }, children);
}
export default Component25334;
