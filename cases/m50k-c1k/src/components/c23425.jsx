import React from 'react';
const LABEL_23425 = 'component_23425';
export function Component23425({ value = 23425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23425, 'data-value': derived.doubled }, children);
}
export default Component23425;
