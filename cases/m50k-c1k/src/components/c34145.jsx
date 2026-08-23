import React from 'react';
const LABEL_34145 = 'component_34145';
export function Component34145({ value = 34145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34145, 'data-value': derived.doubled }, children);
}
export default Component34145;
