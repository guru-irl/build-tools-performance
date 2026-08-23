import React from 'react';
const LABEL_34839 = 'component_34839';
export function Component34839({ value = 34839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34839, 'data-value': derived.doubled }, children);
}
export default Component34839;
