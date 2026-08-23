import React from 'react';
const LABEL_36714 = 'component_36714';
export function Component36714({ value = 36714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36714, 'data-value': derived.doubled }, children);
}
export default Component36714;
