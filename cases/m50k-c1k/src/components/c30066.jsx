import React from 'react';
const LABEL_30066 = 'component_30066';
export function Component30066({ value = 30066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30066, 'data-value': derived.doubled }, children);
}
export default Component30066;
