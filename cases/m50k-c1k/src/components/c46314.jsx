import React from 'react';
const LABEL_46314 = 'component_46314';
export function Component46314({ value = 46314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46314, 'data-value': derived.doubled }, children);
}
export default Component46314;
