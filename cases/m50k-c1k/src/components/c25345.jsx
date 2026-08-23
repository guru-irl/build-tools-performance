import React from 'react';
const LABEL_25345 = 'component_25345';
export function Component25345({ value = 25345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25345, 'data-value': derived.doubled }, children);
}
export default Component25345;
