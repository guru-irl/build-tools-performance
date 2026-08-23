import React from 'react';
const LABEL_43526 = 'component_43526';
export function Component43526({ value = 43526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43526, 'data-value': derived.doubled }, children);
}
export default Component43526;
