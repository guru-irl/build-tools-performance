import React from 'react';
const LABEL_3877 = 'component_3877';
export function Component3877({ value = 3877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3877, 'data-value': derived.doubled }, children);
}
export default Component3877;
