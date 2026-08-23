import React from 'react';
const LABEL_3632 = 'component_3632';
export function Component3632({ value = 3632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3632, 'data-value': derived.doubled }, children);
}
export default Component3632;
