import React from 'react';
const LABEL_40369 = 'component_40369';
export function Component40369({ value = 40369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40369, 'data-value': derived.doubled }, children);
}
export default Component40369;
