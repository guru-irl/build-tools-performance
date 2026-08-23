import React from 'react';
const LABEL_45109 = 'component_45109';
export function Component45109({ value = 45109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45109, 'data-value': derived.doubled }, children);
}
export default Component45109;
