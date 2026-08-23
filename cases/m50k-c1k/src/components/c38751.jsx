import React from 'react';
const LABEL_38751 = 'component_38751';
export function Component38751({ value = 38751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38751, 'data-value': derived.doubled }, children);
}
export default Component38751;
