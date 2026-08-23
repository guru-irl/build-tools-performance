import React from 'react';
const LABEL_25039 = 'component_25039';
export function Component25039({ value = 25039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25039, 'data-value': derived.doubled }, children);
}
export default Component25039;
