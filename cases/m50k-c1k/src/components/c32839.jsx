import React from 'react';
const LABEL_32839 = 'component_32839';
export function Component32839({ value = 32839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32839, 'data-value': derived.doubled }, children);
}
export default Component32839;
