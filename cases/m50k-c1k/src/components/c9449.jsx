import React from 'react';
const LABEL_9449 = 'component_9449';
export function Component9449({ value = 9449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9449, 'data-value': derived.doubled }, children);
}
export default Component9449;
