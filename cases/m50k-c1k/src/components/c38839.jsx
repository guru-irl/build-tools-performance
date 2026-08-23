import React from 'react';
const LABEL_38839 = 'component_38839';
export function Component38839({ value = 38839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38839, 'data-value': derived.doubled }, children);
}
export default Component38839;
