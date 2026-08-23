import React from 'react';
const LABEL_12511 = 'component_12511';
export function Component12511({ value = 12511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12511, 'data-value': derived.doubled }, children);
}
export default Component12511;
