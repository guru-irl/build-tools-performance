import React from 'react';
const LABEL_30277 = 'component_30277';
export function Component30277({ value = 30277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30277, 'data-value': derived.doubled }, children);
}
export default Component30277;
