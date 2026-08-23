import React from 'react';
const LABEL_30643 = 'component_30643';
export function Component30643({ value = 30643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30643, 'data-value': derived.doubled }, children);
}
export default Component30643;
