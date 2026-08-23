import React from 'react';
const LABEL_28402 = 'component_28402';
export function Component28402({ value = 28402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28402, 'data-value': derived.doubled }, children);
}
export default Component28402;
