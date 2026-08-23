import React from 'react';
const LABEL_16839 = 'component_16839';
export function Component16839({ value = 16839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16839, 'data-value': derived.doubled }, children);
}
export default Component16839;
