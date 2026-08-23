import React from 'react';
const LABEL_30938 = 'component_30938';
export function Component30938({ value = 30938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30938, 'data-value': derived.doubled }, children);
}
export default Component30938;
