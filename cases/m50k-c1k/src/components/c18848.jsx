import React from 'react';
const LABEL_18848 = 'component_18848';
export function Component18848({ value = 18848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18848, 'data-value': derived.doubled }, children);
}
export default Component18848;
