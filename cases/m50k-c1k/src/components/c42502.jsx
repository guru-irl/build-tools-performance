import React from 'react';
const LABEL_42502 = 'component_42502';
export function Component42502({ value = 42502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42502, 'data-value': derived.doubled }, children);
}
export default Component42502;
