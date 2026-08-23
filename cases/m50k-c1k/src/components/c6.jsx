import React from 'react';
const LABEL_6 = 'component_6';
export function Component6({ value = 6, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6, 'data-value': derived.doubled }, children);
}
export default Component6;
