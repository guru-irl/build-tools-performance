import React from 'react';
const LABEL_10434 = 'component_10434';
export function Component10434({ value = 10434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10434, 'data-value': derived.doubled }, children);
}
export default Component10434;
