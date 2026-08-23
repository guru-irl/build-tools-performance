import React from 'react';
const LABEL_23215 = 'component_23215';
export function Component23215({ value = 23215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23215, 'data-value': derived.doubled }, children);
}
export default Component23215;
