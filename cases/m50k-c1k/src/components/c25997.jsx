import React from 'react';
const LABEL_25997 = 'component_25997';
export function Component25997({ value = 25997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25997, 'data-value': derived.doubled }, children);
}
export default Component25997;
