import React from 'react';
const LABEL_17217 = 'component_17217';
export function Component17217({ value = 17217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17217, 'data-value': derived.doubled }, children);
}
export default Component17217;
