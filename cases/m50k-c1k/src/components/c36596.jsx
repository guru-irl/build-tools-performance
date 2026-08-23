import React from 'react';
const LABEL_36596 = 'component_36596';
export function Component36596({ value = 36596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36596, 'data-value': derived.doubled }, children);
}
export default Component36596;
