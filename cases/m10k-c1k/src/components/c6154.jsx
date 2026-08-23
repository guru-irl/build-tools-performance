import React from 'react';
const LABEL_6154 = 'component_6154';
export function Component6154({ value = 6154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6154, 'data-value': derived.doubled }, children);
}
export default Component6154;
