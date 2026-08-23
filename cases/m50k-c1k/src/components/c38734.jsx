import React from 'react';
const LABEL_38734 = 'component_38734';
export function Component38734({ value = 38734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38734, 'data-value': derived.doubled }, children);
}
export default Component38734;
