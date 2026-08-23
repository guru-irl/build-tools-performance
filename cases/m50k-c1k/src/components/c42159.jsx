import React from 'react';
const LABEL_42159 = 'component_42159';
export function Component42159({ value = 42159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42159, 'data-value': derived.doubled }, children);
}
export default Component42159;
