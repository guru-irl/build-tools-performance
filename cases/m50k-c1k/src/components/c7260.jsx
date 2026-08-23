import React from 'react';
const LABEL_7260 = 'component_7260';
export function Component7260({ value = 7260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7260, 'data-value': derived.doubled }, children);
}
export default Component7260;
