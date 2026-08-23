import React from 'react';
const LABEL_17347 = 'component_17347';
export function Component17347({ value = 17347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17347, 'data-value': derived.doubled }, children);
}
export default Component17347;
