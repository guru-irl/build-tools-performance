import React from 'react';
const LABEL_38728 = 'component_38728';
export function Component38728({ value = 38728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38728, 'data-value': derived.doubled }, children);
}
export default Component38728;
