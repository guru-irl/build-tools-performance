import React from 'react';
const LABEL_1500 = 'component_1500';
export function Component1500({ value = 1500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1500, 'data-value': derived.doubled }, children);
}
export default Component1500;
