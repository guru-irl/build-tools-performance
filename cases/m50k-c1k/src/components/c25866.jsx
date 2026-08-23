import React from 'react';
const LABEL_25866 = 'component_25866';
export function Component25866({ value = 25866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25866, 'data-value': derived.doubled }, children);
}
export default Component25866;
