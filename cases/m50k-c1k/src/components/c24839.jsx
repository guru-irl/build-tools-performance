import React from 'react';
const LABEL_24839 = 'component_24839';
export function Component24839({ value = 24839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24839, 'data-value': derived.doubled }, children);
}
export default Component24839;
