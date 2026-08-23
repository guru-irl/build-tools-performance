import React from 'react';
const LABEL_46504 = 'component_46504';
export function Component46504({ value = 46504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46504, 'data-value': derived.doubled }, children);
}
export default Component46504;
