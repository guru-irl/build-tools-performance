import React from 'react';
const LABEL_30981 = 'component_30981';
export function Component30981({ value = 30981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30981, 'data-value': derived.doubled }, children);
}
export default Component30981;
