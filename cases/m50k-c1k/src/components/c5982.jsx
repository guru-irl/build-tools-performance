import React from 'react';
const LABEL_5982 = 'component_5982';
export function Component5982({ value = 5982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5982, 'data-value': derived.doubled }, children);
}
export default Component5982;
