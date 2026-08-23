import React from 'react';
const LABEL_10932 = 'component_10932';
export function Component10932({ value = 10932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10932, 'data-value': derived.doubled }, children);
}
export default Component10932;
