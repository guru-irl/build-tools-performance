import React from 'react';
const LABEL_42255 = 'component_42255';
export function Component42255({ value = 42255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42255, 'data-value': derived.doubled }, children);
}
export default Component42255;
