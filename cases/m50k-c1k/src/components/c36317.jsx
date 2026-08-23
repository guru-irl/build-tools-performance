import React from 'react';
const LABEL_36317 = 'component_36317';
export function Component36317({ value = 36317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36317, 'data-value': derived.doubled }, children);
}
export default Component36317;
