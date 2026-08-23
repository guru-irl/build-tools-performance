import React from 'react';
const LABEL_1839 = 'component_1839';
export function Component1839({ value = 1839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1839, 'data-value': derived.doubled }, children);
}
export default Component1839;
