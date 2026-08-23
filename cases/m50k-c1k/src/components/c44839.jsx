import React from 'react';
const LABEL_44839 = 'component_44839';
export function Component44839({ value = 44839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44839, 'data-value': derived.doubled }, children);
}
export default Component44839;
