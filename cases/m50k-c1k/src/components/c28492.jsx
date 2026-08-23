import React from 'react';
const LABEL_28492 = 'component_28492';
export function Component28492({ value = 28492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28492, 'data-value': derived.doubled }, children);
}
export default Component28492;
