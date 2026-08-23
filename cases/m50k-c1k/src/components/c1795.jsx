import React from 'react';
const LABEL_1795 = 'component_1795';
export function Component1795({ value = 1795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1795, 'data-value': derived.doubled }, children);
}
export default Component1795;
