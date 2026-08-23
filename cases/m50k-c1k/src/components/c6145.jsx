import React from 'react';
const LABEL_6145 = 'component_6145';
export function Component6145({ value = 6145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6145, 'data-value': derived.doubled }, children);
}
export default Component6145;
