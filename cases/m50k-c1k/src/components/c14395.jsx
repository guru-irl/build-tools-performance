import React from 'react';
const LABEL_14395 = 'component_14395';
export function Component14395({ value = 14395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14395, 'data-value': derived.doubled }, children);
}
export default Component14395;
