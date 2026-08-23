import React from 'react';
const LABEL_35434 = 'component_35434';
export function Component35434({ value = 35434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35434, 'data-value': derived.doubled }, children);
}
export default Component35434;
