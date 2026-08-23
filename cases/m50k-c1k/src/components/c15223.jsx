import React from 'react';
const LABEL_15223 = 'component_15223';
export function Component15223({ value = 15223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15223, 'data-value': derived.doubled }, children);
}
export default Component15223;
