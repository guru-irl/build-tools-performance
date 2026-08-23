import React from 'react';
const LABEL_6839 = 'component_6839';
export function Component6839({ value = 6839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6839, 'data-value': derived.doubled }, children);
}
export default Component6839;
