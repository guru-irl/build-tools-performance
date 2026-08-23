import React from 'react';
const LABEL_35632 = 'component_35632';
export function Component35632({ value = 35632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35632, 'data-value': derived.doubled }, children);
}
export default Component35632;
