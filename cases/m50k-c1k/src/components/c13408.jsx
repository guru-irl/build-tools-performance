import React from 'react';
const LABEL_13408 = 'component_13408';
export function Component13408({ value = 13408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13408, 'data-value': derived.doubled }, children);
}
export default Component13408;
