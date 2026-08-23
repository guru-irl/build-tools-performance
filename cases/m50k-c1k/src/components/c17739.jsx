import React from 'react';
const LABEL_17739 = 'component_17739';
export function Component17739({ value = 17739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17739, 'data-value': derived.doubled }, children);
}
export default Component17739;
