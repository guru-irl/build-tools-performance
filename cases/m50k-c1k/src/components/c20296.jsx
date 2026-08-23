import React from 'react';
const LABEL_20296 = 'component_20296';
export function Component20296({ value = 20296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20296, 'data-value': derived.doubled }, children);
}
export default Component20296;
