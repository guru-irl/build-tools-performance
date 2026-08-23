import React from 'react';
const LABEL_44072 = 'component_44072';
export function Component44072({ value = 44072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44072, 'data-value': derived.doubled }, children);
}
export default Component44072;
