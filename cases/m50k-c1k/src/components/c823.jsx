import React from 'react';
const LABEL_823 = 'component_823';
export function Component823({ value = 823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_823, 'data-value': derived.doubled }, children);
}
export default Component823;
