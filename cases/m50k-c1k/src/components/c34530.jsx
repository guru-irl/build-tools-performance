import React from 'react';
const LABEL_34530 = 'component_34530';
export function Component34530({ value = 34530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34530, 'data-value': derived.doubled }, children);
}
export default Component34530;
