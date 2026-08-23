import React from 'react';
const LABEL_28964 = 'component_28964';
export function Component28964({ value = 28964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28964, 'data-value': derived.doubled }, children);
}
export default Component28964;
