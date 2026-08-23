import React from 'react';
const LABEL_5285 = 'component_5285';
export function Component5285({ value = 5285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5285, 'data-value': derived.doubled }, children);
}
export default Component5285;
