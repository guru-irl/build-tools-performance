import React from 'react';
const LABEL_8352 = 'component_8352';
export function Component8352({ value = 8352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8352, 'data-value': derived.doubled }, children);
}
export default Component8352;
