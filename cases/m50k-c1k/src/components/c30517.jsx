import React from 'react';
const LABEL_30517 = 'component_30517';
export function Component30517({ value = 30517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30517, 'data-value': derived.doubled }, children);
}
export default Component30517;
