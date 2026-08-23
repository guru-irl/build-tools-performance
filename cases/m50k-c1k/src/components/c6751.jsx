import React from 'react';
const LABEL_6751 = 'component_6751';
export function Component6751({ value = 6751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6751, 'data-value': derived.doubled }, children);
}
export default Component6751;
