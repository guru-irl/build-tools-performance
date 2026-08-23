import React from 'react';
const LABEL_46061 = 'component_46061';
export function Component46061({ value = 46061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46061, 'data-value': derived.doubled }, children);
}
export default Component46061;
