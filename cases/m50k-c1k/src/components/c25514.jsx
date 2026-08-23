import React from 'react';
const LABEL_25514 = 'component_25514';
export function Component25514({ value = 25514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25514, 'data-value': derived.doubled }, children);
}
export default Component25514;
