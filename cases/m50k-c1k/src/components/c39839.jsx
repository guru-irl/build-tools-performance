import React from 'react';
const LABEL_39839 = 'component_39839';
export function Component39839({ value = 39839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39839, 'data-value': derived.doubled }, children);
}
export default Component39839;
