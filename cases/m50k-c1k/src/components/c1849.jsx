import React from 'react';
const LABEL_1849 = 'component_1849';
export function Component1849({ value = 1849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1849, 'data-value': derived.doubled }, children);
}
export default Component1849;
