import React from 'react';
const LABEL_13608 = 'component_13608';
export function Component13608({ value = 13608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13608, 'data-value': derived.doubled }, children);
}
export default Component13608;
