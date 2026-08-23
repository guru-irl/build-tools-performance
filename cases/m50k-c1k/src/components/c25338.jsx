import React from 'react';
const LABEL_25338 = 'component_25338';
export function Component25338({ value = 25338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25338, 'data-value': derived.doubled }, children);
}
export default Component25338;
