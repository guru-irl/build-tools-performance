import React from 'react';
const LABEL_31749 = 'component_31749';
export function Component31749({ value = 31749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31749, 'data-value': derived.doubled }, children);
}
export default Component31749;
