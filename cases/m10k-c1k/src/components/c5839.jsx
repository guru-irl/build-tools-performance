import React from 'react';
const LABEL_5839 = 'component_5839';
export function Component5839({ value = 5839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5839, 'data-value': derived.doubled }, children);
}
export default Component5839;
