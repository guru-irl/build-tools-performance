import React from 'react';
const LABEL_1847 = 'component_1847';
export function Component1847({ value = 1847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1847, 'data-value': derived.doubled }, children);
}
export default Component1847;
