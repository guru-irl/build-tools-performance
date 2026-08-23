import React from 'react';
const LABEL_1747 = 'component_1747';
export function Component1747({ value = 1747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1747, 'data-value': derived.doubled }, children);
}
export default Component1747;
