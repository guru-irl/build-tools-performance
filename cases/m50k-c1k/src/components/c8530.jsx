import React from 'react';
const LABEL_8530 = 'component_8530';
export function Component8530({ value = 8530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8530, 'data-value': derived.doubled }, children);
}
export default Component8530;
