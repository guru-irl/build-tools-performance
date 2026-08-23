import React from 'react';
const LABEL_42254 = 'component_42254';
export function Component42254({ value = 42254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42254, 'data-value': derived.doubled }, children);
}
export default Component42254;
