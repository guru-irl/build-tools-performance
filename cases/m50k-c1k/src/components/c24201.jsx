import React from 'react';
const LABEL_24201 = 'component_24201';
export function Component24201({ value = 24201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24201, 'data-value': derived.doubled }, children);
}
export default Component24201;
