import React from 'react';
const LABEL_3188 = 'component_3188';
export function Component3188({ value = 3188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3188, 'data-value': derived.doubled }, children);
}
export default Component3188;
