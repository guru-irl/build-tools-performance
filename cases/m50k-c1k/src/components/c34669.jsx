import React from 'react';
const LABEL_34669 = 'component_34669';
export function Component34669({ value = 34669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34669, 'data-value': derived.doubled }, children);
}
export default Component34669;
