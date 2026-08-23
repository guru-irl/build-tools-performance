import React from 'react';
const LABEL_15697 = 'component_15697';
export function Component15697({ value = 15697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15697, 'data-value': derived.doubled }, children);
}
export default Component15697;
