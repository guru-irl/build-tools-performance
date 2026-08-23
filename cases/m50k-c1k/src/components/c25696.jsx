import React from 'react';
const LABEL_25696 = 'component_25696';
export function Component25696({ value = 25696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25696, 'data-value': derived.doubled }, children);
}
export default Component25696;
