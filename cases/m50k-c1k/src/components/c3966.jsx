import React from 'react';
const LABEL_3966 = 'component_3966';
export function Component3966({ value = 3966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3966, 'data-value': derived.doubled }, children);
}
export default Component3966;
