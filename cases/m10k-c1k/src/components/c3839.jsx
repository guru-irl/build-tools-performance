import React from 'react';
const LABEL_3839 = 'component_3839';
export function Component3839({ value = 3839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3839, 'data-value': derived.doubled }, children);
}
export default Component3839;
