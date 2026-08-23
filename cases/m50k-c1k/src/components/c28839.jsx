import React from 'react';
const LABEL_28839 = 'component_28839';
export function Component28839({ value = 28839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28839, 'data-value': derived.doubled }, children);
}
export default Component28839;
