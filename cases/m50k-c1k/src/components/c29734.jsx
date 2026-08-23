import React from 'react';
const LABEL_29734 = 'component_29734';
export function Component29734({ value = 29734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29734, 'data-value': derived.doubled }, children);
}
export default Component29734;
