import React from 'react';
const LABEL_8070 = 'component_8070';
export function Component8070({ value = 8070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8070, 'data-value': derived.doubled }, children);
}
export default Component8070;
