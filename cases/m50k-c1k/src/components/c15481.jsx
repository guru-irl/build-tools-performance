import React from 'react';
const LABEL_15481 = 'component_15481';
export function Component15481({ value = 15481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15481, 'data-value': derived.doubled }, children);
}
export default Component15481;
