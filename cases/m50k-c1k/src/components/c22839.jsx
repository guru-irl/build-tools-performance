import React from 'react';
const LABEL_22839 = 'component_22839';
export function Component22839({ value = 22839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22839, 'data-value': derived.doubled }, children);
}
export default Component22839;
