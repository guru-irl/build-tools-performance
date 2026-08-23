import React from 'react';
const LABEL_7697 = 'component_7697';
export function Component7697({ value = 7697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7697, 'data-value': derived.doubled }, children);
}
export default Component7697;
