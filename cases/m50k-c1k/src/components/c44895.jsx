import React from 'react';
const LABEL_44895 = 'component_44895';
export function Component44895({ value = 44895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44895, 'data-value': derived.doubled }, children);
}
export default Component44895;
