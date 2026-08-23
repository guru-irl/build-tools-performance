import React from 'react';
const LABEL_33734 = 'component_33734';
export function Component33734({ value = 33734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33734, 'data-value': derived.doubled }, children);
}
export default Component33734;
