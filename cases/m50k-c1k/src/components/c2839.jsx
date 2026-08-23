import React from 'react';
const LABEL_2839 = 'component_2839';
export function Component2839({ value = 2839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2839, 'data-value': derived.doubled }, children);
}
export default Component2839;
