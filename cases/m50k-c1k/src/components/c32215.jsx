import React from 'react';
const LABEL_32215 = 'component_32215';
export function Component32215({ value = 32215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32215, 'data-value': derived.doubled }, children);
}
export default Component32215;
