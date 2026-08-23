import React from 'react';
const LABEL_46352 = 'component_46352';
export function Component46352({ value = 46352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46352, 'data-value': derived.doubled }, children);
}
export default Component46352;
