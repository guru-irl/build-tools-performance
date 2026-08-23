import React from 'react';
const LABEL_1829 = 'component_1829';
export function Component1829({ value = 1829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1829, 'data-value': derived.doubled }, children);
}
export default Component1829;
