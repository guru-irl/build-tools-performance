import React from 'react';
const LABEL_46559 = 'component_46559';
export function Component46559({ value = 46559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46559, 'data-value': derived.doubled }, children);
}
export default Component46559;
