import React from 'react';
const LABEL_25030 = 'component_25030';
export function Component25030({ value = 25030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25030, 'data-value': derived.doubled }, children);
}
export default Component25030;
