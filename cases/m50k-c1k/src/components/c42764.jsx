import React from 'react';
const LABEL_42764 = 'component_42764';
export function Component42764({ value = 42764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42764, 'data-value': derived.doubled }, children);
}
export default Component42764;
