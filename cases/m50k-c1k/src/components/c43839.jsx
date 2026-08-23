import React from 'react';
const LABEL_43839 = 'component_43839';
export function Component43839({ value = 43839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43839, 'data-value': derived.doubled }, children);
}
export default Component43839;
