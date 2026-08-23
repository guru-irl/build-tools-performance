import React from 'react';
const LABEL_23223 = 'component_23223';
export function Component23223({ value = 23223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23223, 'data-value': derived.doubled }, children);
}
export default Component23223;
