import React from 'react';
const LABEL_14450 = 'component_14450';
export function Component14450({ value = 14450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14450, 'data-value': derived.doubled }, children);
}
export default Component14450;
