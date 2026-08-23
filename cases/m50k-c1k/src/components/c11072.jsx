import React from 'react';
const LABEL_11072 = 'component_11072';
export function Component11072({ value = 11072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11072, 'data-value': derived.doubled }, children);
}
export default Component11072;
