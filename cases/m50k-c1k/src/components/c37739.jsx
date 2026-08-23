import React from 'react';
const LABEL_37739 = 'component_37739';
export function Component37739({ value = 37739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37739, 'data-value': derived.doubled }, children);
}
export default Component37739;
