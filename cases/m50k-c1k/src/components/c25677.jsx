import React from 'react';
const LABEL_25677 = 'component_25677';
export function Component25677({ value = 25677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25677, 'data-value': derived.doubled }, children);
}
export default Component25677;
