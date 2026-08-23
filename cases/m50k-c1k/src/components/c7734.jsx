import React from 'react';
const LABEL_7734 = 'component_7734';
export function Component7734({ value = 7734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7734, 'data-value': derived.doubled }, children);
}
export default Component7734;
