import React from 'react';
const LABEL_17556 = 'component_17556';
export function Component17556({ value = 17556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17556, 'data-value': derived.doubled }, children);
}
export default Component17556;
