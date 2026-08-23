import React from 'react';
const LABEL_17212 = 'component_17212';
export function Component17212({ value = 17212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17212, 'data-value': derived.doubled }, children);
}
export default Component17212;
