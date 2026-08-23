import React from 'react';
const LABEL_44718 = 'component_44718';
export function Component44718({ value = 44718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44718, 'data-value': derived.doubled }, children);
}
export default Component44718;
