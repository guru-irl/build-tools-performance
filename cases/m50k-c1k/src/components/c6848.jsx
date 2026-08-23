import React from 'react';
const LABEL_6848 = 'component_6848';
export function Component6848({ value = 6848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6848, 'data-value': derived.doubled }, children);
}
export default Component6848;
