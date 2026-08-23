import React from 'react';
const LABEL_30864 = 'component_30864';
export function Component30864({ value = 30864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30864, 'data-value': derived.doubled }, children);
}
export default Component30864;
