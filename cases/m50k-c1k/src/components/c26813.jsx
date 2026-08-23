import React from 'react';
const LABEL_26813 = 'component_26813';
export function Component26813({ value = 26813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26813, 'data-value': derived.doubled }, children);
}
export default Component26813;
