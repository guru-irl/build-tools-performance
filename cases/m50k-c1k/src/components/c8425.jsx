import React from 'react';
const LABEL_8425 = 'component_8425';
export function Component8425({ value = 8425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8425, 'data-value': derived.doubled }, children);
}
export default Component8425;
