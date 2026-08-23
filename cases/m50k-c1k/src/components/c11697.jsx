import React from 'react';
const LABEL_11697 = 'component_11697';
export function Component11697({ value = 11697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11697, 'data-value': derived.doubled }, children);
}
export default Component11697;
