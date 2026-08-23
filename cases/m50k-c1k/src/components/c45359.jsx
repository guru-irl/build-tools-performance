import React from 'react';
const LABEL_45359 = 'component_45359';
export function Component45359({ value = 45359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45359, 'data-value': derived.doubled }, children);
}
export default Component45359;
