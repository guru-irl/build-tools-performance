import React from 'react';
const LABEL_25958 = 'component_25958';
export function Component25958({ value = 25958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25958, 'data-value': derived.doubled }, children);
}
export default Component25958;
