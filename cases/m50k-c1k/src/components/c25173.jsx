import React from 'react';
const LABEL_25173 = 'component_25173';
export function Component25173({ value = 25173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25173, 'data-value': derived.doubled }, children);
}
export default Component25173;
