import React from 'react';
const LABEL_11734 = 'component_11734';
export function Component11734({ value = 11734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11734, 'data-value': derived.doubled }, children);
}
export default Component11734;
