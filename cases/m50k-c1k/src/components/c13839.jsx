import React from 'react';
const LABEL_13839 = 'component_13839';
export function Component13839({ value = 13839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13839, 'data-value': derived.doubled }, children);
}
export default Component13839;
