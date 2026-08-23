import React from 'react';
const LABEL_45979 = 'component_45979';
export function Component45979({ value = 45979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45979, 'data-value': derived.doubled }, children);
}
export default Component45979;
