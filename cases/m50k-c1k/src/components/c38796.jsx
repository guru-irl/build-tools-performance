import React from 'react';
const LABEL_38796 = 'component_38796';
export function Component38796({ value = 38796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38796, 'data-value': derived.doubled }, children);
}
export default Component38796;
