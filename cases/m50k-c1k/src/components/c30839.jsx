import React from 'react';
const LABEL_30839 = 'component_30839';
export function Component30839({ value = 30839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30839, 'data-value': derived.doubled }, children);
}
export default Component30839;
