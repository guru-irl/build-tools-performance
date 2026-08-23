import React from 'react';
const LABEL_31249 = 'component_31249';
export function Component31249({ value = 31249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31249, 'data-value': derived.doubled }, children);
}
export default Component31249;
