import React from 'react';
const LABEL_1740 = 'component_1740';
export function Component1740({ value = 1740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1740, 'data-value': derived.doubled }, children);
}
export default Component1740;
