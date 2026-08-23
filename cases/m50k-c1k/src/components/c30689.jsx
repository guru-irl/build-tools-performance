import React from 'react';
const LABEL_30689 = 'component_30689';
export function Component30689({ value = 30689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30689, 'data-value': derived.doubled }, children);
}
export default Component30689;
