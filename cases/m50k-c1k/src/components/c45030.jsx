import React from 'react';
const LABEL_45030 = 'component_45030';
export function Component45030({ value = 45030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45030, 'data-value': derived.doubled }, children);
}
export default Component45030;
