import React from 'react';
const LABEL_31480 = 'component_31480';
export function Component31480({ value = 31480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31480, 'data-value': derived.doubled }, children);
}
export default Component31480;
