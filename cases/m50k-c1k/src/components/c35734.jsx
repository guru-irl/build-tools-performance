import React from 'react';
const LABEL_35734 = 'component_35734';
export function Component35734({ value = 35734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35734, 'data-value': derived.doubled }, children);
}
export default Component35734;
