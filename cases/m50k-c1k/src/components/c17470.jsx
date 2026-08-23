import React from 'react';
const LABEL_17470 = 'component_17470';
export function Component17470({ value = 17470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17470, 'data-value': derived.doubled }, children);
}
export default Component17470;
