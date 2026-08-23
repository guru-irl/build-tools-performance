import React from 'react';
const LABEL_28884 = 'component_28884';
export function Component28884({ value = 28884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28884, 'data-value': derived.doubled }, children);
}
export default Component28884;
