import React from 'react';
const LABEL_44249 = 'component_44249';
export function Component44249({ value = 44249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44249, 'data-value': derived.doubled }, children);
}
export default Component44249;
