import React from 'react';
const LABEL_44858 = 'component_44858';
export function Component44858({ value = 44858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44858, 'data-value': derived.doubled }, children);
}
export default Component44858;
