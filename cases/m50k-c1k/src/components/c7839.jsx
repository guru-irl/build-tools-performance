import React from 'react';
const LABEL_7839 = 'component_7839';
export function Component7839({ value = 7839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7839, 'data-value': derived.doubled }, children);
}
export default Component7839;
