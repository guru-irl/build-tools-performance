import React from 'react';
const LABEL_44460 = 'component_44460';
export function Component44460({ value = 44460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44460, 'data-value': derived.doubled }, children);
}
export default Component44460;
