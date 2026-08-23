import React from 'react';
const LABEL_1429 = 'component_1429';
export function Component1429({ value = 1429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1429, 'data-value': derived.doubled }, children);
}
export default Component1429;
