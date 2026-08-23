import React from 'react';
const LABEL_28608 = 'component_28608';
export function Component28608({ value = 28608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28608, 'data-value': derived.doubled }, children);
}
export default Component28608;
