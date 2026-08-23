import React from 'react';
const LABEL_46145 = 'component_46145';
export function Component46145({ value = 46145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46145, 'data-value': derived.doubled }, children);
}
export default Component46145;
