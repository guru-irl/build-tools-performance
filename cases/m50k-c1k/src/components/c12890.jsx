import React from 'react';
const LABEL_12890 = 'component_12890';
export function Component12890({ value = 12890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12890, 'data-value': derived.doubled }, children);
}
export default Component12890;
