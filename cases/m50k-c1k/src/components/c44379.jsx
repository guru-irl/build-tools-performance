import React from 'react';
const LABEL_44379 = 'component_44379';
export function Component44379({ value = 44379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44379, 'data-value': derived.doubled }, children);
}
export default Component44379;
