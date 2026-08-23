import React from 'react';
const LABEL_25929 = 'component_25929';
export function Component25929({ value = 25929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25929, 'data-value': derived.doubled }, children);
}
export default Component25929;
