import React from 'react';
const LABEL_30127 = 'component_30127';
export function Component30127({ value = 30127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30127, 'data-value': derived.doubled }, children);
}
export default Component30127;
