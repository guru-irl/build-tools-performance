import React from 'react';
const LABEL_30777 = 'component_30777';
export function Component30777({ value = 30777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30777, 'data-value': derived.doubled }, children);
}
export default Component30777;
