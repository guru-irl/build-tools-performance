import React from 'react';
const LABEL_33697 = 'component_33697';
export function Component33697({ value = 33697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33697, 'data-value': derived.doubled }, children);
}
export default Component33697;
