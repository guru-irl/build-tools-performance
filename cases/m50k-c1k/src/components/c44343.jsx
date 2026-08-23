import React from 'react';
const LABEL_44343 = 'component_44343';
export function Component44343({ value = 44343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44343, 'data-value': derived.doubled }, children);
}
export default Component44343;
