import React from 'react';
const LABEL_35530 = 'component_35530';
export function Component35530({ value = 35530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35530, 'data-value': derived.doubled }, children);
}
export default Component35530;
