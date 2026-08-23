import React from 'react';
const LABEL_6284 = 'component_6284';
export function Component6284({ value = 6284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6284, 'data-value': derived.doubled }, children);
}
export default Component6284;
