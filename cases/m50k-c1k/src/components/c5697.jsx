import React from 'react';
const LABEL_5697 = 'component_5697';
export function Component5697({ value = 5697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5697, 'data-value': derived.doubled }, children);
}
export default Component5697;
