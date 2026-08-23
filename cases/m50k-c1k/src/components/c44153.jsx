import React from 'react';
const LABEL_44153 = 'component_44153';
export function Component44153({ value = 44153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44153, 'data-value': derived.doubled }, children);
}
export default Component44153;
