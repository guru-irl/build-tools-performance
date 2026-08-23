import React from 'react';
const LABEL_42129 = 'component_42129';
export function Component42129({ value = 42129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42129, 'data-value': derived.doubled }, children);
}
export default Component42129;
