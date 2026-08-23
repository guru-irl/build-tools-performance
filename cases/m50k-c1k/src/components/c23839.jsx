import React from 'react';
const LABEL_23839 = 'component_23839';
export function Component23839({ value = 23839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23839, 'data-value': derived.doubled }, children);
}
export default Component23839;
