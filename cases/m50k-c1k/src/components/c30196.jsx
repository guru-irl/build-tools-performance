import React from 'react';
const LABEL_30196 = 'component_30196';
export function Component30196({ value = 30196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30196, 'data-value': derived.doubled }, children);
}
export default Component30196;
