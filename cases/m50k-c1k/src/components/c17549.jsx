import React from 'react';
const LABEL_17549 = 'component_17549';
export function Component17549({ value = 17549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17549, 'data-value': derived.doubled }, children);
}
export default Component17549;
