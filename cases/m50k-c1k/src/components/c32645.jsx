import React from 'react';
const LABEL_32645 = 'component_32645';
export function Component32645({ value = 32645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32645, 'data-value': derived.doubled }, children);
}
export default Component32645;
