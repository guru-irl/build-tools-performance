import React from 'react';
const LABEL_40395 = 'component_40395';
export function Component40395({ value = 40395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40395, 'data-value': derived.doubled }, children);
}
export default Component40395;
