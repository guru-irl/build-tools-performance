import React from 'react';
const LABEL_34945 = 'component_34945';
export function Component34945({ value = 34945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34945, 'data-value': derived.doubled }, children);
}
export default Component34945;
