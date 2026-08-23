import React from 'react';
const LABEL_34928 = 'component_34928';
export function Component34928({ value = 34928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34928, 'data-value': derived.doubled }, children);
}
export default Component34928;
