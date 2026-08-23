import React from 'react';
const LABEL_6328 = 'component_6328';
export function Component6328({ value = 6328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6328, 'data-value': derived.doubled }, children);
}
export default Component6328;
