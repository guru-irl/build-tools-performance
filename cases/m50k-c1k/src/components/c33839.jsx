import React from 'react';
const LABEL_33839 = 'component_33839';
export function Component33839({ value = 33839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33839, 'data-value': derived.doubled }, children);
}
export default Component33839;
