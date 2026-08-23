import React from 'react';
const LABEL_17203 = 'component_17203';
export function Component17203({ value = 17203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17203, 'data-value': derived.doubled }, children);
}
export default Component17203;
