import React from 'react';
const LABEL_1372 = 'component_1372';
export function Component1372({ value = 1372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1372, 'data-value': derived.doubled }, children);
}
export default Component1372;
