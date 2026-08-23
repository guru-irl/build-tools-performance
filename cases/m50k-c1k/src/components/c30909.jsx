import React from 'react';
const LABEL_30909 = 'component_30909';
export function Component30909({ value = 30909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30909, 'data-value': derived.doubled }, children);
}
export default Component30909;
