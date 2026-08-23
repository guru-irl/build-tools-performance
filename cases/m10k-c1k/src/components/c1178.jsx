import React from 'react';
const LABEL_1178 = 'component_1178';
export function Component1178({ value = 1178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1178, 'data-value': derived.doubled }, children);
}
export default Component1178;
