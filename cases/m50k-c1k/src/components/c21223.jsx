import React from 'react';
const LABEL_21223 = 'component_21223';
export function Component21223({ value = 21223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21223, 'data-value': derived.doubled }, children);
}
export default Component21223;
