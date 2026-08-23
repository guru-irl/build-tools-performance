import React from 'react';
const LABEL_5596 = 'component_5596';
export function Component5596({ value = 5596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5596, 'data-value': derived.doubled }, children);
}
export default Component5596;
