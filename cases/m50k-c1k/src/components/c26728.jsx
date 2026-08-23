import React from 'react';
const LABEL_26728 = 'component_26728';
export function Component26728({ value = 26728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26728, 'data-value': derived.doubled }, children);
}
export default Component26728;
