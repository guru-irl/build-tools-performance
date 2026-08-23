import React from 'react';
const LABEL_28695 = 'component_28695';
export function Component28695({ value = 28695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28695, 'data-value': derived.doubled }, children);
}
export default Component28695;
