import React from 'react';
const LABEL_10215 = 'component_10215';
export function Component10215({ value = 10215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10215, 'data-value': derived.doubled }, children);
}
export default Component10215;
