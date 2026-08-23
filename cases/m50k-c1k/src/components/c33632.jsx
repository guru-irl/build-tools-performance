import React from 'react';
const LABEL_33632 = 'component_33632';
export function Component33632({ value = 33632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33632, 'data-value': derived.doubled }, children);
}
export default Component33632;
