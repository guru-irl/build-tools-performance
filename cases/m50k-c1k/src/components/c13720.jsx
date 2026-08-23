import React from 'react';
const LABEL_13720 = 'component_13720';
export function Component13720({ value = 13720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13720, 'data-value': derived.doubled }, children);
}
export default Component13720;
