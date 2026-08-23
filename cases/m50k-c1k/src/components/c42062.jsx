import React from 'react';
const LABEL_42062 = 'component_42062';
export function Component42062({ value = 42062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42062, 'data-value': derived.doubled }, children);
}
export default Component42062;
