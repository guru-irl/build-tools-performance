import React from 'react';
const LABEL_26917 = 'component_26917';
export function Component26917({ value = 26917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26917, 'data-value': derived.doubled }, children);
}
export default Component26917;
