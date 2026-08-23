import React from 'react';
const LABEL_30830 = 'component_30830';
export function Component30830({ value = 30830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30830, 'data-value': derived.doubled }, children);
}
export default Component30830;
