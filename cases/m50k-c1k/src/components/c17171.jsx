import React from 'react';
const LABEL_17171 = 'component_17171';
export function Component17171({ value = 17171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17171, 'data-value': derived.doubled }, children);
}
export default Component17171;
