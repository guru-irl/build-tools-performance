import React from 'react';
const LABEL_25979 = 'component_25979';
export function Component25979({ value = 25979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25979, 'data-value': derived.doubled }, children);
}
export default Component25979;
