import React from 'react';
const LABEL_25639 = 'component_25639';
export function Component25639({ value = 25639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25639, 'data-value': derived.doubled }, children);
}
export default Component25639;
