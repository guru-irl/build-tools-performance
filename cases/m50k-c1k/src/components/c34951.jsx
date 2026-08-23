import React from 'react';
const LABEL_34951 = 'component_34951';
export function Component34951({ value = 34951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34951, 'data-value': derived.doubled }, children);
}
export default Component34951;
