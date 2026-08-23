import React from 'react';
const LABEL_45839 = 'component_45839';
export function Component45839({ value = 45839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45839, 'data-value': derived.doubled }, children);
}
export default Component45839;
