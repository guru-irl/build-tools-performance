import React from 'react';
const LABEL_37064 = 'component_37064';
export function Component37064({ value = 37064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37064, 'data-value': derived.doubled }, children);
}
export default Component37064;
