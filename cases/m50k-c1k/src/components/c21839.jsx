import React from 'react';
const LABEL_21839 = 'component_21839';
export function Component21839({ value = 21839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21839, 'data-value': derived.doubled }, children);
}
export default Component21839;
