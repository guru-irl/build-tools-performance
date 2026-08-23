import React from 'react';
const LABEL_1696 = 'component_1696';
export function Component1696({ value = 1696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1696, 'data-value': derived.doubled }, children);
}
export default Component1696;
