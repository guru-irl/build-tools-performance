import React from 'react';
const LABEL_44526 = 'component_44526';
export function Component44526({ value = 44526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44526, 'data-value': derived.doubled }, children);
}
export default Component44526;
