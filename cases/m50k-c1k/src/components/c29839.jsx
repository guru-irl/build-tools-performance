import React from 'react';
const LABEL_29839 = 'component_29839';
export function Component29839({ value = 29839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29839, 'data-value': derived.doubled }, children);
}
export default Component29839;
