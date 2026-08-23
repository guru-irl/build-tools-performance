import React from 'react';
const LABEL_839 = 'component_839';
export function Component839({ value = 839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_839, 'data-value': derived.doubled }, children);
}
export default Component839;
