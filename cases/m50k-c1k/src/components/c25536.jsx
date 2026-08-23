import React from 'react';
const LABEL_25536 = 'component_25536';
export function Component25536({ value = 25536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25536, 'data-value': derived.doubled }, children);
}
export default Component25536;
