import React from 'react';
const LABEL_22070 = 'component_22070';
export function Component22070({ value = 22070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22070, 'data-value': derived.doubled }, children);
}
export default Component22070;
