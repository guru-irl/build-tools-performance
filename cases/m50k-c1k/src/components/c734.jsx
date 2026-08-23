import React from 'react';
const LABEL_734 = 'component_734';
export function Component734({ value = 734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_734, 'data-value': derived.doubled }, children);
}
export default Component734;
