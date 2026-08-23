import React from 'react';
const LABEL_46197 = 'component_46197';
export function Component46197({ value = 46197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46197, 'data-value': derived.doubled }, children);
}
export default Component46197;
