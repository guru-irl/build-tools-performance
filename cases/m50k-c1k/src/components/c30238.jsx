import React from 'react';
const LABEL_30238 = 'component_30238';
export function Component30238({ value = 30238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30238, 'data-value': derived.doubled }, children);
}
export default Component30238;
