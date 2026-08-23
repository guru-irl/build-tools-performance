import React from 'react';
const LABEL_25847 = 'component_25847';
export function Component25847({ value = 25847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25847, 'data-value': derived.doubled }, children);
}
export default Component25847;
