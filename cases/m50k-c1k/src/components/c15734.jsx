import React from 'react';
const LABEL_15734 = 'component_15734';
export function Component15734({ value = 15734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15734, 'data-value': derived.doubled }, children);
}
export default Component15734;
