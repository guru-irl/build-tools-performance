import React from 'react';
const LABEL_45434 = 'component_45434';
export function Component45434({ value = 45434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45434, 'data-value': derived.doubled }, children);
}
export default Component45434;
