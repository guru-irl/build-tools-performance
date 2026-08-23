import React from 'react';
const LABEL_12595 = 'component_12595';
export function Component12595({ value = 12595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12595, 'data-value': derived.doubled }, children);
}
export default Component12595;
