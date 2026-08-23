import React from 'react';
const LABEL_9839 = 'component_9839';
export function Component9839({ value = 9839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9839, 'data-value': derived.doubled }, children);
}
export default Component9839;
