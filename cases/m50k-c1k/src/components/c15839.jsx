import React from 'react';
const LABEL_15839 = 'component_15839';
export function Component15839({ value = 15839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15839, 'data-value': derived.doubled }, children);
}
export default Component15839;
