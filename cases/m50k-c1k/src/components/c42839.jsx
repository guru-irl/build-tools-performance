import React from 'react';
const LABEL_42839 = 'component_42839';
export function Component42839({ value = 42839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42839, 'data-value': derived.doubled }, children);
}
export default Component42839;
