import React from 'react';
const LABEL_23596 = 'component_23596';
export function Component23596({ value = 23596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23596, 'data-value': derived.doubled }, children);
}
export default Component23596;
