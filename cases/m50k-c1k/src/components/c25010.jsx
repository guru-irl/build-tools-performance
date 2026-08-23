import React from 'react';
const LABEL_25010 = 'component_25010';
export function Component25010({ value = 25010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25010, 'data-value': derived.doubled }, children);
}
export default Component25010;
