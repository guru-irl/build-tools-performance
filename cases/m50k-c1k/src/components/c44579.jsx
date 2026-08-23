import React from 'react';
const LABEL_44579 = 'component_44579';
export function Component44579({ value = 44579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44579, 'data-value': derived.doubled }, children);
}
export default Component44579;
