import React from 'react';
const LABEL_30860 = 'component_30860';
export function Component30860({ value = 30860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30860, 'data-value': derived.doubled }, children);
}
export default Component30860;
