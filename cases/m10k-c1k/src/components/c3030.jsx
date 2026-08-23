import React from 'react';
const LABEL_3030 = 'component_3030';
export function Component3030({ value = 3030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3030, 'data-value': derived.doubled }, children);
}
export default Component3030;
