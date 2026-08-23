import React from 'react';
const LABEL_19734 = 'component_19734';
export function Component19734({ value = 19734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19734, 'data-value': derived.doubled }, children);
}
export default Component19734;
