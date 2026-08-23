import React from 'react';
const LABEL_36034 = 'component_36034';
export function Component36034({ value = 36034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36034, 'data-value': derived.doubled }, children);
}
export default Component36034;
