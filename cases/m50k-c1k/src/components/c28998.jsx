import React from 'react';
const LABEL_28998 = 'component_28998';
export function Component28998({ value = 28998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28998, 'data-value': derived.doubled }, children);
}
export default Component28998;
