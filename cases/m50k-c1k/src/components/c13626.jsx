import React from 'react';
const LABEL_13626 = 'component_13626';
export function Component13626({ value = 13626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13626, 'data-value': derived.doubled }, children);
}
export default Component13626;
