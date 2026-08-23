import React from 'react';
const LABEL_36777 = 'component_36777';
export function Component36777({ value = 36777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36777, 'data-value': derived.doubled }, children);
}
export default Component36777;
