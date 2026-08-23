import React from 'react';
const LABEL_44097 = 'component_44097';
export function Component44097({ value = 44097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44097, 'data-value': derived.doubled }, children);
}
export default Component44097;
