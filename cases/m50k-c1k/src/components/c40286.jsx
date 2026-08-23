import React from 'react';
const LABEL_40286 = 'component_40286';
export function Component40286({ value = 40286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40286, 'data-value': derived.doubled }, children);
}
export default Component40286;
