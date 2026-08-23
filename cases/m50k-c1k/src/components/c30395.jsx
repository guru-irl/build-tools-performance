import React from 'react';
const LABEL_30395 = 'component_30395';
export function Component30395({ value = 30395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30395, 'data-value': derived.doubled }, children);
}
export default Component30395;
