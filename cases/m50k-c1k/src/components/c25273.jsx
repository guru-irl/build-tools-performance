import React from 'react';
const LABEL_25273 = 'component_25273';
export function Component25273({ value = 25273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25273, 'data-value': derived.doubled }, children);
}
export default Component25273;
