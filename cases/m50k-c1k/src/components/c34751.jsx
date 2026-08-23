import React from 'react';
const LABEL_34751 = 'component_34751';
export function Component34751({ value = 34751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34751, 'data-value': derived.doubled }, children);
}
export default Component34751;
