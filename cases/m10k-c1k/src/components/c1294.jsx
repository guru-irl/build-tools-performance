import React from 'react';
const LABEL_1294 = 'component_1294';
export function Component1294({ value = 1294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1294, 'data-value': derived.doubled }, children);
}
export default Component1294;
