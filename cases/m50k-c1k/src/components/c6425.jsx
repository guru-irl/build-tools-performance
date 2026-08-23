import React from 'react';
const LABEL_6425 = 'component_6425';
export function Component6425({ value = 6425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6425, 'data-value': derived.doubled }, children);
}
export default Component6425;
