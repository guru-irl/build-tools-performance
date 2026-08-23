import React from 'react';
const LABEL_3823 = 'component_3823';
export function Component3823({ value = 3823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3823, 'data-value': derived.doubled }, children);
}
export default Component3823;
