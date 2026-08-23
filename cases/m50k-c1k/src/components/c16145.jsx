import React from 'react';
const LABEL_16145 = 'component_16145';
export function Component16145({ value = 16145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16145, 'data-value': derived.doubled }, children);
}
export default Component16145;
