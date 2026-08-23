import React from 'react';
const LABEL_42158 = 'component_42158';
export function Component42158({ value = 42158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42158, 'data-value': derived.doubled }, children);
}
export default Component42158;
