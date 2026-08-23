import React from 'react';
const LABEL_30708 = 'component_30708';
export function Component30708({ value = 30708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30708, 'data-value': derived.doubled }, children);
}
export default Component30708;
