import React from 'react';
const LABEL_23329 = 'component_23329';
export function Component23329({ value = 23329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23329, 'data-value': derived.doubled }, children);
}
export default Component23329;
