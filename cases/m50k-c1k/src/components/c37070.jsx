import React from 'react';
const LABEL_37070 = 'component_37070';
export function Component37070({ value = 37070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37070, 'data-value': derived.doubled }, children);
}
export default Component37070;
