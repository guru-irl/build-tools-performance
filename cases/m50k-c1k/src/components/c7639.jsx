import React from 'react';
const LABEL_7639 = 'component_7639';
export function Component7639({ value = 7639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7639, 'data-value': derived.doubled }, children);
}
export default Component7639;
