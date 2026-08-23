import React from 'react';
const LABEL_28030 = 'component_28030';
export function Component28030({ value = 28030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28030, 'data-value': derived.doubled }, children);
}
export default Component28030;
