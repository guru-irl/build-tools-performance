import React from 'react';
const LABEL_8720 = 'component_8720';
export function Component8720({ value = 8720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8720, 'data-value': derived.doubled }, children);
}
export default Component8720;
