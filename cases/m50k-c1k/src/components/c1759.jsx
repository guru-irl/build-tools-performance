import React from 'react';
const LABEL_1759 = 'component_1759';
export function Component1759({ value = 1759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1759, 'data-value': derived.doubled }, children);
}
export default Component1759;
