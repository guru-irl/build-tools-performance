import React from 'react';
const LABEL_11632 = 'component_11632';
export function Component11632({ value = 11632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11632, 'data-value': derived.doubled }, children);
}
export default Component11632;
