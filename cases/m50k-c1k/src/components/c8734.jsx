import React from 'react';
const LABEL_8734 = 'component_8734';
export function Component8734({ value = 8734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8734, 'data-value': derived.doubled }, children);
}
export default Component8734;
