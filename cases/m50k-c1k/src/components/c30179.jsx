import React from 'react';
const LABEL_30179 = 'component_30179';
export function Component30179({ value = 30179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30179, 'data-value': derived.doubled }, children);
}
export default Component30179;
