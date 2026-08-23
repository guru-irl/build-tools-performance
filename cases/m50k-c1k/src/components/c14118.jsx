import React from 'react';
const LABEL_14118 = 'component_14118';
export function Component14118({ value = 14118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14118, 'data-value': derived.doubled }, children);
}
export default Component14118;
