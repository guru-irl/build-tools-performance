import React from 'react';
const LABEL_25272 = 'component_25272';
export function Component25272({ value = 25272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25272, 'data-value': derived.doubled }, children);
}
export default Component25272;
