import React from 'react';
const LABEL_848 = 'component_848';
export function Component848({ value = 848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_848, 'data-value': derived.doubled }, children);
}
export default Component848;
