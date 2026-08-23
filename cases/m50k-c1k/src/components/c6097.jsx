import React from 'react';
const LABEL_6097 = 'component_6097';
export function Component6097({ value = 6097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6097, 'data-value': derived.doubled }, children);
}
export default Component6097;
