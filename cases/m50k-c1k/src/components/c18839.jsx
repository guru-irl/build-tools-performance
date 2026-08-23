import React from 'react';
const LABEL_18839 = 'component_18839';
export function Component18839({ value = 18839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18839, 'data-value': derived.doubled }, children);
}
export default Component18839;
