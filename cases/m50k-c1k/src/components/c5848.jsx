import React from 'react';
const LABEL_5848 = 'component_5848';
export function Component5848({ value = 5848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5848, 'data-value': derived.doubled }, children);
}
export default Component5848;
