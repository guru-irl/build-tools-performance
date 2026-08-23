import React from 'react';
const LABEL_25490 = 'component_25490';
export function Component25490({ value = 25490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25490, 'data-value': derived.doubled }, children);
}
export default Component25490;
