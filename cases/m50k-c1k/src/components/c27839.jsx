import React from 'react';
const LABEL_27839 = 'component_27839';
export function Component27839({ value = 27839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27839, 'data-value': derived.doubled }, children);
}
export default Component27839;
