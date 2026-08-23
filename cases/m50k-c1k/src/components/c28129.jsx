import React from 'react';
const LABEL_28129 = 'component_28129';
export function Component28129({ value = 28129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28129, 'data-value': derived.doubled }, children);
}
export default Component28129;
