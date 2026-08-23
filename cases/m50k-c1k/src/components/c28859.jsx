import React from 'react';
const LABEL_28859 = 'component_28859';
export function Component28859({ value = 28859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28859, 'data-value': derived.doubled }, children);
}
export default Component28859;
