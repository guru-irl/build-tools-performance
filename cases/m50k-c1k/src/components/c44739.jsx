import React from 'react';
const LABEL_44739 = 'component_44739';
export function Component44739({ value = 44739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44739, 'data-value': derived.doubled }, children);
}
export default Component44739;
