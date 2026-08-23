import React from 'react';
const LABEL_34030 = 'component_34030';
export function Component34030({ value = 34030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34030, 'data-value': derived.doubled }, children);
}
export default Component34030;
