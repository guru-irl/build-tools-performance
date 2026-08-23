import React from 'react';
const LABEL_38030 = 'component_38030';
export function Component38030({ value = 38030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38030, 'data-value': derived.doubled }, children);
}
export default Component38030;
