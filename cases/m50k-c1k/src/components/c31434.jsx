import React from 'react';
const LABEL_31434 = 'component_31434';
export function Component31434({ value = 31434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31434, 'data-value': derived.doubled }, children);
}
export default Component31434;
