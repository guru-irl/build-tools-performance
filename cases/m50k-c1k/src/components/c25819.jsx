import React from 'react';
const LABEL_25819 = 'component_25819';
export function Component25819({ value = 25819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25819, 'data-value': derived.doubled }, children);
}
export default Component25819;
