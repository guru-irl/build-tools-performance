import React from 'react';
const LABEL_31839 = 'component_31839';
export function Component31839({ value = 31839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31839, 'data-value': derived.doubled }, children);
}
export default Component31839;
