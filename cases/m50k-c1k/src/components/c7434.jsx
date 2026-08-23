import React from 'react';
const LABEL_7434 = 'component_7434';
export function Component7434({ value = 7434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7434, 'data-value': derived.doubled }, children);
}
export default Component7434;
