import React from 'react';
const LABEL_31358 = 'component_31358';
export function Component31358({ value = 31358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31358, 'data-value': derived.doubled }, children);
}
export default Component31358;
