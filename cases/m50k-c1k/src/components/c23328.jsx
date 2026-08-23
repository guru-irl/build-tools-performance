import React from 'react';
const LABEL_23328 = 'component_23328';
export function Component23328({ value = 23328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23328, 'data-value': derived.doubled }, children);
}
export default Component23328;
