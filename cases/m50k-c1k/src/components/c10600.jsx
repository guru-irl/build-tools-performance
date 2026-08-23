import React from 'react';
const LABEL_10600 = 'component_10600';
export function Component10600({ value = 10600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10600, 'data-value': derived.doubled }, children);
}
export default Component10600;
