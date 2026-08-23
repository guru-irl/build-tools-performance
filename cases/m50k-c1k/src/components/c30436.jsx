import React from 'react';
const LABEL_30436 = 'component_30436';
export function Component30436({ value = 30436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30436, 'data-value': derived.doubled }, children);
}
export default Component30436;
