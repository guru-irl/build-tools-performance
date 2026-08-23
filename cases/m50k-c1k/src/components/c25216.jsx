import React from 'react';
const LABEL_25216 = 'component_25216';
export function Component25216({ value = 25216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25216, 'data-value': derived.doubled }, children);
}
export default Component25216;
