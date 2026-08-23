import React from 'react';
const LABEL_1754 = 'component_1754';
export function Component1754({ value = 1754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1754, 'data-value': derived.doubled }, children);
}
export default Component1754;
