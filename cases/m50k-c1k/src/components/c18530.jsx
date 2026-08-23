import React from 'react';
const LABEL_18530 = 'component_18530';
export function Component18530({ value = 18530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18530, 'data-value': derived.doubled }, children);
}
export default Component18530;
