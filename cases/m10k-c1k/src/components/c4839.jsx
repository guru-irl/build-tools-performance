import React from 'react';
const LABEL_4839 = 'component_4839';
export function Component4839({ value = 4839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4839, 'data-value': derived.doubled }, children);
}
export default Component4839;
