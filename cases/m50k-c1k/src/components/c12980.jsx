import React from 'react';
const LABEL_12980 = 'component_12980';
export function Component12980({ value = 12980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12980, 'data-value': derived.doubled }, children);
}
export default Component12980;
