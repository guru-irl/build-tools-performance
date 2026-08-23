import React from 'react';
const LABEL_25211 = 'component_25211';
export function Component25211({ value = 25211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25211, 'data-value': derived.doubled }, children);
}
export default Component25211;
