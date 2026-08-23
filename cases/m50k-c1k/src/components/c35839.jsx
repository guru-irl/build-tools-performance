import React from 'react';
const LABEL_35839 = 'component_35839';
export function Component35839({ value = 35839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35839, 'data-value': derived.doubled }, children);
}
export default Component35839;
