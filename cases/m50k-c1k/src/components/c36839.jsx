import React from 'react';
const LABEL_36839 = 'component_36839';
export function Component36839({ value = 36839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36839, 'data-value': derived.doubled }, children);
}
export default Component36839;
