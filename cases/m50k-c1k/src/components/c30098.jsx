import React from 'react';
const LABEL_30098 = 'component_30098';
export function Component30098({ value = 30098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30098, 'data-value': derived.doubled }, children);
}
export default Component30098;
