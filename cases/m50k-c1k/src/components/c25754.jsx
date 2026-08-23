import React from 'react';
const LABEL_25754 = 'component_25754';
export function Component25754({ value = 25754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25754, 'data-value': derived.doubled }, children);
}
export default Component25754;
