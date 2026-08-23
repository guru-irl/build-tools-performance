import React from 'react';
const LABEL_11839 = 'component_11839';
export function Component11839({ value = 11839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11839, 'data-value': derived.doubled }, children);
}
export default Component11839;
