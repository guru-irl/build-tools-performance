import React from 'react';
const LABEL_42575 = 'component_42575';
export function Component42575({ value = 42575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42575, 'data-value': derived.doubled }, children);
}
export default Component42575;
