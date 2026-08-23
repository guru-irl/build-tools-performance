import React from 'react';
const LABEL_29632 = 'component_29632';
export function Component29632({ value = 29632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29632, 'data-value': derived.doubled }, children);
}
export default Component29632;
