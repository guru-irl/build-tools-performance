import React from 'react';
const LABEL_30462 = 'component_30462';
export function Component30462({ value = 30462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30462, 'data-value': derived.doubled }, children);
}
export default Component30462;
