import React from 'react';
const LABEL_44586 = 'component_44586';
export function Component44586({ value = 44586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44586, 'data-value': derived.doubled }, children);
}
export default Component44586;
