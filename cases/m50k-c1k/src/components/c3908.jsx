import React from 'react';
const LABEL_3908 = 'component_3908';
export function Component3908({ value = 3908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3908, 'data-value': derived.doubled }, children);
}
export default Component3908;
