import React from 'react';
const LABEL_30481 = 'component_30481';
export function Component30481({ value = 30481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30481, 'data-value': derived.doubled }, children);
}
export default Component30481;
