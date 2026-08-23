import React from 'react';
const LABEL_30681 = 'component_30681';
export function Component30681({ value = 30681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30681, 'data-value': derived.doubled }, children);
}
export default Component30681;
