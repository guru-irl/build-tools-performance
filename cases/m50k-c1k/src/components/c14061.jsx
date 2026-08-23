import React from 'react';
const LABEL_14061 = 'component_14061';
export function Component14061({ value = 14061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14061, 'data-value': derived.doubled }, children);
}
export default Component14061;
