import React from 'react';
const LABEL_5893 = 'component_5893';
export function Component5893({ value = 5893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5893, 'data-value': derived.doubled }, children);
}
export default Component5893;
