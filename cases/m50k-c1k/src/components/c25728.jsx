import React from 'react';
const LABEL_25728 = 'component_25728';
export function Component25728({ value = 25728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25728, 'data-value': derived.doubled }, children);
}
export default Component25728;
