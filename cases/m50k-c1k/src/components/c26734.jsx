import React from 'react';
const LABEL_26734 = 'component_26734';
export function Component26734({ value = 26734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26734, 'data-value': derived.doubled }, children);
}
export default Component26734;
