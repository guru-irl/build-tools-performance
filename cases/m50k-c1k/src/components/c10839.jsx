import React from 'react';
const LABEL_10839 = 'component_10839';
export function Component10839({ value = 10839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10839, 'data-value': derived.doubled }, children);
}
export default Component10839;
