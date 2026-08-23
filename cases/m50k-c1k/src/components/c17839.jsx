import React from 'react';
const LABEL_17839 = 'component_17839';
export function Component17839({ value = 17839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17839, 'data-value': derived.doubled }, children);
}
export default Component17839;
