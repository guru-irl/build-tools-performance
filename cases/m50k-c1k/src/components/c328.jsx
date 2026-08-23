import React from 'react';
const LABEL_328 = 'component_328';
export function Component328({ value = 328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_328, 'data-value': derived.doubled }, children);
}
export default Component328;
