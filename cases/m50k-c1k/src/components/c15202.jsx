import React from 'react';
const LABEL_15202 = 'component_15202';
export function Component15202({ value = 15202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15202, 'data-value': derived.doubled }, children);
}
export default Component15202;
