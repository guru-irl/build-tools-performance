import React from 'react';
const LABEL_8086 = 'component_8086';
export function Component8086({ value = 8086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8086, 'data-value': derived.doubled }, children);
}
export default Component8086;
