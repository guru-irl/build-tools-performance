import React from 'react';
const LABEL_44722 = 'component_44722';
export function Component44722({ value = 44722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44722, 'data-value': derived.doubled }, children);
}
export default Component44722;
