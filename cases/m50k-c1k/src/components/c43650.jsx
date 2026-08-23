import React from 'react';
const LABEL_43650 = 'component_43650';
export function Component43650({ value = 43650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43650, 'data-value': derived.doubled }, children);
}
export default Component43650;
