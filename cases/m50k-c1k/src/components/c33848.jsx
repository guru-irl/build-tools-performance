import React from 'react';
const LABEL_33848 = 'component_33848';
export function Component33848({ value = 33848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33848, 'data-value': derived.doubled }, children);
}
export default Component33848;
