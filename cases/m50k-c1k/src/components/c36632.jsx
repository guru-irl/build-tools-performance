import React from 'react';
const LABEL_36632 = 'component_36632';
export function Component36632({ value = 36632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36632, 'data-value': derived.doubled }, children);
}
export default Component36632;
