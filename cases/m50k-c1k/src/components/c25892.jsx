import React from 'react';
const LABEL_25892 = 'component_25892';
export function Component25892({ value = 25892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25892, 'data-value': derived.doubled }, children);
}
export default Component25892;
