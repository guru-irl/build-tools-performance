import React from 'react';
const LABEL_29434 = 'component_29434';
export function Component29434({ value = 29434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29434, 'data-value': derived.doubled }, children);
}
export default Component29434;
