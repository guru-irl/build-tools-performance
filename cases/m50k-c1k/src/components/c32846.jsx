import React from 'react';
const LABEL_32846 = 'component_32846';
export function Component32846({ value = 32846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32846, 'data-value': derived.doubled }, children);
}
export default Component32846;
