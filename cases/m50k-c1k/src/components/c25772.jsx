import React from 'react';
const LABEL_25772 = 'component_25772';
export function Component25772({ value = 25772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25772, 'data-value': derived.doubled }, children);
}
export default Component25772;
