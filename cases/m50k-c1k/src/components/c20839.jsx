import React from 'react';
const LABEL_20839 = 'component_20839';
export function Component20839({ value = 20839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20839, 'data-value': derived.doubled }, children);
}
export default Component20839;
