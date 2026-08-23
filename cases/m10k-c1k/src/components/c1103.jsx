import React from 'react';
const LABEL_1103 = 'component_1103';
export function Component1103({ value = 1103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1103, 'data-value': derived.doubled }, children);
}
export default Component1103;
