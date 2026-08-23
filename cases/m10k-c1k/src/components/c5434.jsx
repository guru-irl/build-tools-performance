import React from 'react';
const LABEL_5434 = 'component_5434';
export function Component5434({ value = 5434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5434, 'data-value': derived.doubled }, children);
}
export default Component5434;
