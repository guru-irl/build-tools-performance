import React from 'react';
const LABEL_44255 = 'component_44255';
export function Component44255({ value = 44255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44255, 'data-value': derived.doubled }, children);
}
export default Component44255;
