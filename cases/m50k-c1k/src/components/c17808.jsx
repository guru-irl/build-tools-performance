import React from 'react';
const LABEL_17808 = 'component_17808';
export function Component17808({ value = 17808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17808, 'data-value': derived.doubled }, children);
}
export default Component17808;
