import React from 'react';
const LABEL_5215 = 'component_5215';
export function Component5215({ value = 5215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5215, 'data-value': derived.doubled }, children);
}
export default Component5215;
