import React from 'react';
const LABEL_1845 = 'component_1845';
export function Component1845({ value = 1845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1845, 'data-value': derived.doubled }, children);
}
export default Component1845;
