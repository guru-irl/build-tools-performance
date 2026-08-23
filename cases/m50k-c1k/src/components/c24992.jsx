import React from 'react';
const LABEL_24992 = 'component_24992';
export function Component24992({ value = 24992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24992, 'data-value': derived.doubled }, children);
}
export default Component24992;
