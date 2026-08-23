import React from 'react';
const LABEL_25737 = 'component_25737';
export function Component25737({ value = 25737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25737, 'data-value': derived.doubled }, children);
}
export default Component25737;
