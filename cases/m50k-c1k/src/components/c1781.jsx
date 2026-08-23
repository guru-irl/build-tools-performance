import React from 'react';
const LABEL_1781 = 'component_1781';
export function Component1781({ value = 1781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1781, 'data-value': derived.doubled }, children);
}
export default Component1781;
