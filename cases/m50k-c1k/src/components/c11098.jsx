import React from 'react';
const LABEL_11098 = 'component_11098';
export function Component11098({ value = 11098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11098, 'data-value': derived.doubled }, children);
}
export default Component11098;
