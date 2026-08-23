import React from 'react';
const LABEL_3460 = 'component_3460';
export function Component3460({ value = 3460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3460, 'data-value': derived.doubled }, children);
}
export default Component3460;
