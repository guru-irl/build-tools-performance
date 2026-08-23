import React from 'react';
const LABEL_25256 = 'component_25256';
export function Component25256({ value = 25256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25256, 'data-value': derived.doubled }, children);
}
export default Component25256;
