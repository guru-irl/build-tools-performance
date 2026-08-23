import React from 'react';
const LABEL_42253 = 'component_42253';
export function Component42253({ value = 42253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42253, 'data-value': derived.doubled }, children);
}
export default Component42253;
