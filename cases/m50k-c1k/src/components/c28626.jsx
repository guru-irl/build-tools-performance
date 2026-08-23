import React from 'react';
const LABEL_28626 = 'component_28626';
export function Component28626({ value = 28626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28626, 'data-value': derived.doubled }, children);
}
export default Component28626;
