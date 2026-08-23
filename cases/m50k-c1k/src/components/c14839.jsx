import React from 'react';
const LABEL_14839 = 'component_14839';
export function Component14839({ value = 14839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14839, 'data-value': derived.doubled }, children);
}
export default Component14839;
