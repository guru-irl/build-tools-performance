import React from 'react';
const LABEL_37632 = 'component_37632';
export function Component37632({ value = 37632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37632, 'data-value': derived.doubled }, children);
}
export default Component37632;
