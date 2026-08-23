import React from 'react';
const LABEL_19951 = 'component_19951';
export function Component19951({ value = 19951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19951, 'data-value': derived.doubled }, children);
}
export default Component19951;
