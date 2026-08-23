import React from 'react';
const LABEL_13490 = 'component_13490';
export function Component13490({ value = 13490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13490, 'data-value': derived.doubled }, children);
}
export default Component13490;
