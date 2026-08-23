import React from 'react';
const LABEL_44140 = 'component_44140';
export function Component44140({ value = 44140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44140, 'data-value': derived.doubled }, children);
}
export default Component44140;
