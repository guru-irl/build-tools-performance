import React from 'react';
const LABEL_22734 = 'component_22734';
export function Component22734({ value = 22734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22734, 'data-value': derived.doubled }, children);
}
export default Component22734;
