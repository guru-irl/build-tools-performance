import React from 'react';
const LABEL_31589 = 'component_31589';
export function Component31589({ value = 31589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31589, 'data-value': derived.doubled }, children);
}
export default Component31589;
