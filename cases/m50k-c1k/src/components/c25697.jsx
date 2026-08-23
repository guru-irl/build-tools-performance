import React from 'react';
const LABEL_25697 = 'component_25697';
export function Component25697({ value = 25697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25697, 'data-value': derived.doubled }, children);
}
export default Component25697;
