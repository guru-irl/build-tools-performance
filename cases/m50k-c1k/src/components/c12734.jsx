import React from 'react';
const LABEL_12734 = 'component_12734';
export function Component12734({ value = 12734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12734, 'data-value': derived.doubled }, children);
}
export default Component12734;
