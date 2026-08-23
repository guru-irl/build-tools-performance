import React from 'react';
const LABEL_31969 = 'component_31969';
export function Component31969({ value = 31969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31969, 'data-value': derived.doubled }, children);
}
export default Component31969;
