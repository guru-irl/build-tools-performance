import React from 'react';
const LABEL_25955 = 'component_25955';
export function Component25955({ value = 25955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25955, 'data-value': derived.doubled }, children);
}
export default Component25955;
