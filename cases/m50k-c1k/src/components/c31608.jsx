import React from 'react';
const LABEL_31608 = 'component_31608';
export function Component31608({ value = 31608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31608, 'data-value': derived.doubled }, children);
}
export default Component31608;
