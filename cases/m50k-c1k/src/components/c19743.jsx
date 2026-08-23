import React from 'react';
const LABEL_19743 = 'component_19743';
export function Component19743({ value = 19743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19743, 'data-value': derived.doubled }, children);
}
export default Component19743;
