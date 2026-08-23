import React from 'react';
const LABEL_6149 = 'component_6149';
export function Component6149({ value = 6149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6149, 'data-value': derived.doubled }, children);
}
export default Component6149;
