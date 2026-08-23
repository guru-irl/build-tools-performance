import React from 'react';
const LABEL_46284 = 'component_46284';
export function Component46284({ value = 46284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46284, 'data-value': derived.doubled }, children);
}
export default Component46284;
