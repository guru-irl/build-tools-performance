import React from 'react';
const LABEL_28697 = 'component_28697';
export function Component28697({ value = 28697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28697, 'data-value': derived.doubled }, children);
}
export default Component28697;
