import React from 'react';
const LABEL_33530 = 'component_33530';
export function Component33530({ value = 33530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33530, 'data-value': derived.doubled }, children);
}
export default Component33530;
