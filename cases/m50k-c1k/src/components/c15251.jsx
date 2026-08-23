import React from 'react';
const LABEL_15251 = 'component_15251';
export function Component15251({ value = 15251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15251, 'data-value': derived.doubled }, children);
}
export default Component15251;
