import React from 'react';
const LABEL_25083 = 'component_25083';
export function Component25083({ value = 25083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25083, 'data-value': derived.doubled }, children);
}
export default Component25083;
