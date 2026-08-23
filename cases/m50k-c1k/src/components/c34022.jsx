import React from 'react';
const LABEL_34022 = 'component_34022';
export function Component34022({ value = 34022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34022, 'data-value': derived.doubled }, children);
}
export default Component34022;
