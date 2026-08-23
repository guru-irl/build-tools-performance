import React from 'react';
const LABEL_12153 = 'component_12153';
export function Component12153({ value = 12153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12153, 'data-value': derived.doubled }, children);
}
export default Component12153;
