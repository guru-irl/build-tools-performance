import React from 'react';
const LABEL_10530 = 'component_10530';
export function Component10530({ value = 10530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10530, 'data-value': derived.doubled }, children);
}
export default Component10530;
