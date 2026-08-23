import React from 'react';
const LABEL_37528 = 'component_37528';
export function Component37528({ value = 37528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37528, 'data-value': derived.doubled }, children);
}
export default Component37528;
