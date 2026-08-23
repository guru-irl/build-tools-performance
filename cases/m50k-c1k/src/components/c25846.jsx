import React from 'react';
const LABEL_25846 = 'component_25846';
export function Component25846({ value = 25846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25846, 'data-value': derived.doubled }, children);
}
export default Component25846;
