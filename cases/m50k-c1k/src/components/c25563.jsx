import React from 'react';
const LABEL_25563 = 'component_25563';
export function Component25563({ value = 25563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25563, 'data-value': derived.doubled }, children);
}
export default Component25563;
