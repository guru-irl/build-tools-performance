import React from 'react';
const LABEL_21896 = 'component_21896';
export function Component21896({ value = 21896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21896, 'data-value': derived.doubled }, children);
}
export default Component21896;
