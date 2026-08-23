import React from 'react';
const LABEL_37272 = 'component_37272';
export function Component37272({ value = 37272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37272, 'data-value': derived.doubled }, children);
}
export default Component37272;
