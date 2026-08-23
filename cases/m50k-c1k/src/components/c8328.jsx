import React from 'react';
const LABEL_8328 = 'component_8328';
export function Component8328({ value = 8328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8328, 'data-value': derived.doubled }, children);
}
export default Component8328;
