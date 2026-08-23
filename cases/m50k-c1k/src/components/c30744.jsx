import React from 'react';
const LABEL_30744 = 'component_30744';
export function Component30744({ value = 30744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30744, 'data-value': derived.doubled }, children);
}
export default Component30744;
