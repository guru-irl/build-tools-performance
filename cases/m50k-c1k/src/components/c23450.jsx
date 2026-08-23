import React from 'react';
const LABEL_23450 = 'component_23450';
export function Component23450({ value = 23450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23450, 'data-value': derived.doubled }, children);
}
export default Component23450;
