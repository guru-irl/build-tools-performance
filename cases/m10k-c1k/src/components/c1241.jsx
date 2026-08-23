import React from 'react';
const LABEL_1241 = 'component_1241';
export function Component1241({ value = 1241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1241, 'data-value': derived.doubled }, children);
}
export default Component1241;
