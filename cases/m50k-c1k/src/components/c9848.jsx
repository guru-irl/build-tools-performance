import React from 'react';
const LABEL_9848 = 'component_9848';
export function Component9848({ value = 9848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9848, 'data-value': derived.doubled }, children);
}
export default Component9848;
