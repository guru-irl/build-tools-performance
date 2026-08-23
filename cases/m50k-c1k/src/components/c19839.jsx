import React from 'react';
const LABEL_19839 = 'component_19839';
export function Component19839({ value = 19839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19839, 'data-value': derived.doubled }, children);
}
export default Component19839;
