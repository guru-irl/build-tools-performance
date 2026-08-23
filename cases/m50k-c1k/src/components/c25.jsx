import React from 'react';
const LABEL_25 = 'component_25';
export function Component25({ value = 25, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25, 'data-value': derived.doubled }, children);
}
export default Component25;
