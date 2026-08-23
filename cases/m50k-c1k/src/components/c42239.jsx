import React from 'react';
const LABEL_42239 = 'component_42239';
export function Component42239({ value = 42239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42239, 'data-value': derived.doubled }, children);
}
export default Component42239;
