import React from 'react';
const LABEL_40839 = 'component_40839';
export function Component40839({ value = 40839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40839, 'data-value': derived.doubled }, children);
}
export default Component40839;
