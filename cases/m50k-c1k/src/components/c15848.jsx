import React from 'react';
const LABEL_15848 = 'component_15848';
export function Component15848({ value = 15848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15848, 'data-value': derived.doubled }, children);
}
export default Component15848;
