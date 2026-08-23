import React from 'react';
const LABEL_1720 = 'component_1720';
export function Component1720({ value = 1720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1720, 'data-value': derived.doubled }, children);
}
export default Component1720;
