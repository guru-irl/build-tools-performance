import React from 'react';
const LABEL_25168 = 'component_25168';
export function Component25168({ value = 25168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25168, 'data-value': derived.doubled }, children);
}
export default Component25168;
