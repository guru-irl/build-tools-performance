import React from 'react';
const LABEL_36434 = 'component_36434';
export function Component36434({ value = 36434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36434, 'data-value': derived.doubled }, children);
}
export default Component36434;
