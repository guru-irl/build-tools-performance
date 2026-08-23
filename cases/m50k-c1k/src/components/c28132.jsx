import React from 'react';
const LABEL_28132 = 'component_28132';
export function Component28132({ value = 28132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28132, 'data-value': derived.doubled }, children);
}
export default Component28132;
